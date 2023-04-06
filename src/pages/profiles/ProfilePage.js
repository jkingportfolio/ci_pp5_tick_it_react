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
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Task from "../tasks/Task";
import Pack from "../packs/Pack";
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
  const [profilePacks, setProfilePacks] = useState({ results: [] });
  // const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileTasks }, { data: profilePacks}] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/tasks/?owner__profile=${id}`),
            axiosReq.get(`/packs/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileTasks(profileTasks);
        setProfilePacks(profilePacks);
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
      {/* <hr /> */}
      {/* <p className="text-center">{profile?.owner}'s tasks</p>
      <hr /> */}
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

  const mainProfilePacks = (
    <>
      {/* <hr /> */}
      {/* <p className="text-center">{profile?.owner}'s tasks</p>
      <hr /> */}
      {profilePacks.results.length ? (
        <InfiniteScroll
          children={profilePacks.results.map((pack) => (
            <Pack key={pack.id} {...pack} setPacks={setProfilePacks} />
          ))}
          dataLength={profilePacks.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePacks.next}
          next={() => fetchMoreData(profilePacks, setProfileTasks)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} has created no packs.`}
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
          <Tabs defaultActiveKey="task">
            <Tab eventKey="task" title="Tasks" tabClassName={appStyles.tabs}>
              {mainProfileTasks}
            </Tab>
            <Tab eventKey="pack" title="Packs" tabClassName={appStyles.tabs}>
              {mainProfilePacks}
            </Tab>
            <Tab eventKey="assigned" title="Assigned" tabClassName={appStyles.tabs}>
              List of tasks profile owner has been assigned
            </Tab>
          </Tabs>
          </Container>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
          <FreeProfiles />
        </Col>
      </Row>
    </div>
  );
}

export default ProfilePage;
