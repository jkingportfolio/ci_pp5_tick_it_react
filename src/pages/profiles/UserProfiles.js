import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/UserProfiles.module.css";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import ScrollToTop from "../../components/ScrollToTop";
import Profile from "./Profile";

function UserProfiles({ message, filter = "" }) {
  const [profiles, setProfiles] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(
          `/profiles/?${filter}search=${query}`
        );
        setProfiles(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchProfiles();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Form
          onSubmit={(event) => event.preventDefault()}
          className={styles.BottomMargin}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search users"
          />
        </Form>
        <div
          id="scrollableDiv"
          style={{ maxHeight: "500px", overflow: "auto" }}
          className={`${styles.Container}`} 
        >
          {hasLoaded ? (
            <>
              {profiles.results.length ? (
                <InfiniteScroll
                  children={profiles.results.map((profiles) => (
                    <Profile
                      key={profiles.id}
                      {...profiles}
                      setProfiles={setProfiles}
                      className={appStyles.DarkText}
                    />
                  ))}
                  dataLength={profiles.results.length}
                  className={appStyles.DarkText}
                  loader={<Asset spinner />}
                  hasMore={!!profiles.next}
                  next={() => fetchMoreData(profiles, setProfiles)}
                  scrollableTarget="scrollableDiv"
                />
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </div>
      </Col>
      <div className={appStyles.ScrollToTopButton}>
        <ScrollToTop />
      </div>
    </Row>
  );
}

export default UserProfiles;
