import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import appStyles from "../App.module.css";
import Asset from "../components/Asset";
import { useProfileData } from "../contexts/ProfileDataContext";
import Profile from "../pages/profiles/Profile";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../utils/utils";
import { axiosReq } from "../api/axiosDefaults";
import NoResults from "../assets/no-results.png";

const ProfilesList = ({ mobile }) => {
  const [profiles, setProfiles] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/`);
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
  }, []);

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <div id="scrollableDiv" style={{ maxHeight: "500px", overflow: 'auto', }}>
          {hasLoaded ? (
            <>
              {profiles.results.length ? (
                <InfiniteScroll 
                  children={profiles.results.map((profiles) => (
                    <Profile key={profiles.id} {...profiles} setProfiles={setProfiles} className={appStyles.LightText}/>
                  ))}
                  dataLength={profiles.results.length}
                  className={appStyles.LightText}
                  loader={<Asset spinner />}
                  hasMore={!!profiles.next}
                  next={() => fetchMoreData(profiles, setProfiles)}
                  scrollableTarget="scrollableDiv"
                />
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} />
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
    </Row>
  );
}

export default ProfilesList;