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
import HighPriorityTasks from "../../components/HighPriorityTasks";
import ScrollToTop from "../../components/ScrollToTop";

const Dashboard = () => {
  const currentUser = useCurrentUser();

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
              <Row>
                <Col>
                  <TaskStatusTable />
                </Col>
                <Col className={`${appStyles.DarkText} ${styles.BorderBox}`}>
                  {/* <FreeProfiles /> */}
                  <TaskPieChart />
                </Col>
              </Row>
              <hr className={styles.HorizontalLine} />
            </Col>
            <Col
              lg={12}
              className={`${appStyles.DarkText} ${styles.BorderBox} ${appStyles.TextAlignCenter}`}
            >
              <h3 className={`${appStyles.LightText} ${styles.BorderBox}`}>
                High Priority tasks
              </h3>
              <HighPriorityTasks />
            </Col>
            <Col
              lg={12}
              className={`${appStyles.DarkText} ${styles.BorderBox}  ${appStyles.TextAlignCenter}`}
            >
              <h3 className={`${appStyles.LightText} ${styles.BorderBox}`}>
                Incomplete Tasks
              </h3>
              <TaskCompleteFilter />
            </Col>
          </Col>
        </Row>
        <ScrollToTop />
      </Container>
    </>
  );
};

export default Dashboard;
