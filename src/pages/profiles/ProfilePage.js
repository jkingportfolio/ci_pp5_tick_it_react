import React, { useEffect, useState } from "react";
import { Col, Row, Container, Tabs, Tab, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
import Avatar from "../../components/Avatar";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const [profileTasks, setProfileTasks] = useState({ results: [] });
  const [profilePacks, setProfilePacks] = useState({ results: [] });
  const [profileAssigned, setProfileAssigned] = useState({ results: [] });
  // const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profileTasks },
          { data: profilePacks },
          { data: profileAssigned },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/tasks/?owner__profile=${id}`),
          axiosReq.get(`/packs/?owner__profile=${id}`),
          axiosReq.get(`/tasks/?assigned_to=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileTasks(profileTasks);
        setProfilePacks(profilePacks);
        setProfileAssigned(profileAssigned);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row className={`${styles.ProfileBox}"px-3 text-center"  ${styles.TopMargin}`}>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} className={`${styles.Border} ${appStyles.AutoMargin} ${appStyles.TextAlignCenter}`}>
          <div>
          <Avatar src={profile?.image} height={150} className={`${appStyles.AutoMargin} ${appStyles.TopMargin} ${styles.AvatarBorder}`}/>
          </div>
          <div>
            <h3 className={styles.TextAlignCenter}>{profile?.owner}</h3>
          </div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} className={`${styles.Border}`}>
          <div className={`${styles.Border} ${styles.DivFlexParent}`}>
            <div className={`${styles.Border} ${styles.DivFlexChild} ${styles.ButtonContainer}`}>
            {profile?.owner} currently works as a {profile?.job_role} and currently has a task count of {profile?.tasks_count}.
            </div>
          </div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} className={`${styles.Border}`}>
          <div className={`${styles.Border} ${styles.DivFlexParent} `}>
            <div className={styles.PositionedButton}>
            {profile?.is_owner && <EditProfileDropdown id={profile?.id} />}
            </div>
            <div
              className={`${styles.Border} ${styles.DivFlexChild} ${styles.ButtonContainer} ${styles.TopMargin}`}
            >
              <Button
                className={`${appStyles.Button}`}
                as={Link}
                to="/tasks/create"
              >
                Create Task
              </Button>
            </div>
            <div
              className={`${styles.Border} ${styles.DivFlexChild} ${styles.ButtonContainer} ${styles.TopMargin}`}
            >
              <Button
                className={`${appStyles.Button}`}
                as={Link}
                to="/packs/create"
              >
                Create Pack
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );

  const mainProfileTasks = (
    <>
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
      {profilePacks.results.length ? (
        <InfiniteScroll
          children={profilePacks.results.map((pack) => (
            <Pack key={pack.id} {...pack} setPacks={setProfilePacks} />
          ))}
          dataLength={profilePacks.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePacks.next}
          next={() => fetchMoreData(profilePacks, setProfilePacks)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} has created no packs.`}
        />
      )}
    </>
  );

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
          <Container className={styles.ProfileBox}>
            {hasLoaded ? <>{mainProfile}</> : <Asset spinner />}
            <Tabs className={styles.TopMargin} defaultActiveKey="task" fill>
              <Tab
                eventKey="task"
                title="Tasks"
                tabClassName={appStyles.Tabs}
                className={appStyles.BoxBorder}
              >
                {mainProfileTasks}
              </Tab>
              <Tab
                eventKey="pack"
                title="Packs"
                tabClassName={appStyles.Tabs}
                className={appStyles.BoxBorder}
              >
                {mainProfilePacks}
              </Tab>
              <Tab
                eventKey="assigned"
                title="Assigned"
                tabClassName={appStyles.Tabs}
                className={appStyles.BoxBorder}
              >
                {mainProfileAssigned}
              </Tab>
            </Tabs>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default ProfilePage;
