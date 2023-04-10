import React, { useState, useEffect } from "react";

import { Col, Container, Row, Form, Button } from "react-bootstrap";

import appStyles from "../App.module.css";
import taskStyles from "../styles/TasksListings.module.css";

import Task from "../pages/tasks/Task";
import Asset from "../components/Asset";
import { axiosReq } from "../api/axiosDefaults";

import NoResults from "../assets/no-results.png";

function HighPriorityTaskListings({ message, filter = "" }) {
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?priority=HIGH`);
        setTasks(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTasks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter]);

  return (
    <Row  className={`${appStyles.JustifyContentCenter} ${appStyles.BottomMargin}`}>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <div className={taskStyles.TaskButton}>
        </div>
        {hasLoaded ? (
          <div className={appStyles.ScrollBox}>
            {tasks.results.length ? (
              tasks.results.map((tasks) => (
                <Task key={tasks.id} {...tasks} setTasks={setTasks} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
                <p>It seems all tasks have been completed!</p>
              </Container>
            )}
          </div>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default HighPriorityTaskListings;