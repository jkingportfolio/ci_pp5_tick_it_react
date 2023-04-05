import React, { useEffect, useState } from "react";
import { Col, Row, Container, Tabs, Tab } from "react-bootstrap";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import FreeProfiles from "./FreeProfiles";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Image } from "react-bootstrap";
import { EditProfileDropdown } from "../../components/DropDown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Task from "../tasks/Task";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const [profileTasks, setProfileTasks] = useState({ results: [] });
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileTasks }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/tasks/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileTasks(profileTasks);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <EditProfileDropdown id={profile?.id} />}
      <Row className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.tasks_count}</div>
              <div>tasks</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.assigned_count}</div>
              <div>Assigned tasks</div>
            </Col>
          </Row>
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const mainProfileTasks = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s tasks</p>
      <hr />
      {profileTasks.results.length ? (
        <InfiniteScroll
          children={profileTasks.results.map((task) => (
            <Task key={task.id} {...task} setTasks={setProfileTasks} />
          ))}
          dataLength={profileTasks.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileTasks.next}
          next={() => fetchMoreData(profileTasks, setProfileTasks)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <div>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <FreeProfiles mobile />
          <Container className={appStyles.Content}>
            {hasLoaded ? <>{mainProfile}</> : <Asset spinner />}
          </Container>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="task" title="Tasks">
              {mainProfileTasks}
            </Tab>
            <Tab eventKey="pack" title="Packs">
              List of profile owners packs
            </Tab>
            <Tab eventKey="assigned" title="Assigned">
              List of tasks profile owner has been assigned
            </Tab>
          </Tabs>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
          <FreeProfiles />
        </Col>
      </Row>
    </div>
  );
}

export default ProfilePage;
