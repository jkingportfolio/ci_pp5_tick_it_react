import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task";
import CommentForm from "../comments/CommentForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router";
import appStyles from "../../App.module.css";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: task }] = await Promise.all([
          axiosReq.get(`/tasks/${id}`),
        ]);
        setTask({ results: [task] });
        console.log(task);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Task {...task.results[0]} setTasks={setTask} taskDetail />
      </Col>
      <Container className={appStyles.Content}>
        {currentUser ? (
          <CommentForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            ptask={id}
            setTask={setTask}
            setComments={setComments}
          />
        ) : comments.results.length ? (
          "Comments"
        ) : null}
      </Container>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Side bar to display other information
      </Col>
    </Row>
  );
}

export default TaskDetail;
