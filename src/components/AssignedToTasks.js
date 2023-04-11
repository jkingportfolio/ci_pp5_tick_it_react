import React, { useEffect, useState } from "react";
import { Col, Row, Container, Tabs, Tab, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Asset from "../components/Asset";
import styles from "../styles/ProfilePage.module.css";
import appStyles from "../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../contexts/ProfileDataContext";
import { Image } from "react-bootstrap";
import { EditProfileDropdown } from "../components/DropDown";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Task from "../pages/tasks/Task";
import { fetchMoreData } from "../utils/utils";
import NoResults from "../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import Avatar from "../components/Avatar";

function AssignedToTask() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const [profileAssigned, setProfileAssigned] = useState({ results: [] });
  // const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profileAssigned },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/tasks/?assigned_to=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileAssigned(profileAssigned);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfileAssigned = (
    <>
      {profileAssigned.results.length ? (
        <InfiniteScroll
          children={profileAssigned.results.map((task) => (
            <Task key={task.id} {...task} setTasks={setProfileAssigned} />
          ))}
          dataLength={profileAssigned.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileAssigned.next}
          next={() => fetchMoreData(profileAssigned, setProfileAssigned)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} has not been assigned any tasks.`}
        />
      )}
    </>
  );

  return (
    <div className={styles.ContentWidth}>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={12}>
            {mainProfileAssigned}
        </Col>
      </Row>
    </div>
  );
}

export default AssignedToTask;
