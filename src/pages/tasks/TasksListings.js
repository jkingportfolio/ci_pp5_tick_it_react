import React, { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";

import appStyles from "../../App.module.css";
import styles from "../../styles/TasksListings.module.css";

import Task from "./Task";


import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";





function TasksListings({ message, filter = "" }) {
    const [tasks, setTasks] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
  
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const { data } = await axiosReq.get(`/tasks/?${filter}`);
          setTasks(data);
          setHasLoaded(true);
        } catch (err) {
          console.log(err);
        }
      };
  
      setHasLoaded(false);
      fetchTasks();
    }, [filter, pathname]);
  
    return (
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <p>Popular profiles mobile</p>
          {hasLoaded ? (
            <>
              {tasks.results.length ? (
                tasks.results.map((tasks) => (
                  <Task key={tasks.id} {...tasks} setTasks={setTasks} />
                ))
              ) : (
                <Container className={appStyles.Content}>
                  <p>
                    No results logic placeholder
                  </p>
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <p>
                Spinner place holder
              </p>
            </Container>
          )}
        </Col>
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
          <p>Popular profiles for desktop</p>
        </Col>
      </Row>
    );
  }
  
  export default TasksListings;