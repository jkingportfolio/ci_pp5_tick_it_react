import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import appStyles from "../../App.module.css";
import styles from "../../styles/SearchBar.module.css";
import packStyles from "../../styles/PackListings.module.css";
import Pack from "./Pack";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import ProfilesList from "../../components/ProfilesList";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import ScrollToTop from "../../components/ScrollToTop";

function PackListings({ message, filter = "" }) {
  const [packs, setPacks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPacks = async () => {
      try {
        const { data } = await axiosReq.get(`/packs/?${filter}search=${query}`);
        setPacks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPacks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Form
          className={styles.BottomMargin}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search packs"
          />
        </Form>
        <div className={packStyles.PackButton}>
          <Button
            className={`${appStyles.Button}`}
            as={Link}
            to="/packs/create"
          >
            Create Pack
          </Button>
        </div>
        {hasLoaded ? (
          <>
            {packs.results.length ? (
              <InfiniteScroll
                children={packs.results.map((packs) => (
                  <Pack key={packs.id} {...packs} setPacks={setPacks} />
                ))}
                dataLength={packs.results.length}
                loader={<Asset spinner />}
                hasMore={!!packs.next}
                next={() => fetchMoreData(packs, setPacks)}
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
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <ProfilesList />
      </Col>
      <div className={appStyles.ScrollToTopButton}>
        <ScrollToTop />
      </div>
    </Row>
  );
}

export default PackListings;
