import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/Dashboard.module.css";
import appStyles from "../../App.module.css";
import FreeProfiles from "../profiles/FreeProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import TaskPieChart from "../../components/TaskPieChart";
import TaskStatusTable from "../../components/TaskStatusTable";



const Dashboard = () => {
 
  const currentUser = useCurrentUser();

  return (
    <>
    <Container>

        <Row>
        <Col md={8} className={`${appStyles.lighttext} ${styles.borderbox}`}>
          <Row>
          <Col md={12} className={`${appStyles.lighttext} ${styles.borderbox}`}>
         Hello {currentUser.username} {currentUser.image}
        </Col>
          </Row>
          <Row>
            <Col md={6} className={`${appStyles.lighttext} ${styles.borderbox}`}>
              TEXT FILER
              TEXT FILER
              TEXT FILER
              
            </Col>
            <Col md={6} className={`${appStyles.lighttext} ${styles.borderbox}`}>
              <TaskStatusTable />
            </Col>
          </Row>
          <Row>
            <Col md={6} className={`${appStyles.lighttext} ${styles.borderbox}`}>
            TEXT FILER
            </Col>
            <Col md={6} className={`${appStyles.lighttext} ${styles.borderbox}`}>
            TEXT FILER
            </Col>
          </Row>
        </Col>
        <Col md={4} className={`${appStyles.darktext} ${styles.borderbox}`}>
        <FreeProfiles />
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default Dashboard;
