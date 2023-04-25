import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pack from "./Pack";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import ScrollToTop from "../../components/ScrollToTop";
import appStyles from "../../App.module.css";
import styles from "../../styles/PackListings.module.css";

function PackListings({ message, filter = "" }) {
  const [packs, setPacks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const maxRetries = 3;

  /* 
    Fetches all packs and retries if 500 server error
  */
  useEffect(() => {
    const fetchPacks = async () => {
      let retries = 0;
      while (retries < maxRetries) {
        try {
          const { data } = await axiosReq.get(`/packs/?${filter}search=${query}`);
          setPacks(data);
          setHasLoaded(true);
          return;
        } catch (err) {
          console.log(err);
          if (err.response && err.response.status === 500) {
            retries++;
            console.log(`Retrying fetchPacks, attempt ${retries}`);
          } else {
            break;
          }
        }
      }
      console.log(`Failed to fetchPacks after ${maxRetries} retries`);
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPacks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  /* 
    Returns pack listing pages of all packs
  */
  return (
    <Row>
      <Col className={`${appStyles.AutoMargin} "py-2 p-0 p-lg-2"`} lg={8}>
        <div className={`${appStyles.TextAlignCenter} ${appStyles.AutoMargin}`}>
          <h3 className={`${appStyles.LightText}`}>PACKS</h3>
        </div>
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
            aria-label="Search bar"
          />
        </Form>
        <div className={styles.PackButton}>
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
      <div className={appStyles.ScrollToTopButton}>
        <ScrollToTop />
      </div>
    </Row>
  );
}

export default PackListings;
