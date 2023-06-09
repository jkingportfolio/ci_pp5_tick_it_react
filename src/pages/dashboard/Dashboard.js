import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import TaskDoughnutChart from "../../components/TaskDoughnutChart";
import TaskStatusTable from "../../components/TaskStatusTable";
import TaskCompleteFilter from "../../components/TaskCompleteFilter";
import HighPriorityTasks from "../../components/HighPriorityTasks";
import ScrollToTop from "../../components/ScrollToTop";
import styles from "../../styles/Dashboard.module.css";
import appStyles from "../../App.module.css";

const Dashboard = () => {
  const currentUser = useCurrentUser();

  /* 
    Returns dashboard page with task count table,
    task doughnut chart, high priority tasks &
    not started tasks
  */
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
                <Col className={`${appStyles.LightText} ${styles.BorderBox}`}>
                  <TaskDoughnutChart />
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
                Not Started Tasks
              </h3>
              <TaskCompleteFilter />
            </Col>
            <div className={appStyles.ScrollToTopButton}>
            <ScrollToTop/>
            </div>
          </Col>
          
        </Row>        
      </Container>
      
    </>
  );
};

export default Dashboard;
