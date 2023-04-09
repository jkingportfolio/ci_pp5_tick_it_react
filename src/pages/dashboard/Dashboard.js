import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/Dashboard.module.css";
import appStyles from "../../App.module.css";
import FreeProfiles from "../profiles/FreeProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import TaskPieChart from "../../components/TaskPieChart";
import TaskStatusTable from "../../components/TaskStatusTable";
import TaskCompleteFilter from "../../components/TaskCompleteFilter";
import ProfilesList from "../../components/ProfilesList";

const Dashboard = () => {
  const currentUser = useCurrentUser();

  //   return (
  //     <>
  //     <Container>

  //         <Row>
  //         <Col md={8} className={`${appStyles.LightText} ${styles.BorderBox}`}>
  //           <Row>
  //           <Col md={12} className={`${appStyles.LightText} ${styles.BorderBox} ${appStyles.Header}`}>
  //          Hello {currentUser.username} {currentUser.image}
  //         </Col>
  //           </Row>
  //           <Row>
  //             <Col md={6} className={`${appStyles.DarkText} ${styles.BorderBox}`}>
  //               <ProfilesList />
  //             </Col>
  //             <Col md={6} className={`${appStyles.LightText} ${styles.BorderBox}`}>
  //               <TaskStatusTable />
  //               {/* <TaskCompleteFilter /> */}
  //             </Col>
  //           </Row>
  //         </Col>
  //         <Col md={4} className={`${appStyles.DarkText} ${styles.BorderBox}`}>
  //         <FreeProfiles />
  //         </Col>
  //       </Row>
  //       </Container>
  //     </>
  //   );
  // };

  return (
    <>
      <Container>
        <Row>
          <Col className={`${appStyles.LightText} ${styles.BorderBox}`}>
            <Col
              md={12}
              className={`${appStyles.LightText} ${styles.BorderBox} ${appStyles.Header}`}
            >
              Hello {currentUser.username} {currentUser.image}
              <hr className={styles.HorizontalLine} />
            </Col>
            <Col
              md={12}
              className={`${appStyles.LightText} ${styles.BorderBox}`}
            >
              <TaskStatusTable />
              <hr className={styles.HorizontalLine} />
            </Col>
            <Col
              md={12}
              className={`${appStyles.DarkText} ${styles.BorderBox}`}
            >
              <ProfilesList />
              <hr className={styles.HorizontalLine} />
            </Col>

            <Col
              md={12}
              className={`${appStyles.DarkText} ${styles.BorderBox}`}
            >
              <TaskCompleteFilter />
              <hr className={styles.HorizontalLine}/>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
