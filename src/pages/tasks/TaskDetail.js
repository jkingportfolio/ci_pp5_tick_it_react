import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task";
import Comment from "../comments/Comment";
import CommentForm from "../comments/CommentForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Col, Container } from "react-bootstrap";
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
        const [{ data: task }, { data: comments }] = await Promise.all([
          axiosReq.get(`/tasks/${id}`),
          axiosReq.get(`/comments/?task=${id}`),
        ]);
        setTask({ results: [task] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div className="h-100">      

        <Task {...task.results[0]} setTask={setTask} taskDetail />      
      <Container className={appStyles.Content}>
        {currentUser ? (
          <CommentForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            task={id}
            setTask={setTask}
            setComments={setComments}
          />
        ) : comments.results.length ? (
          "Comments"
        ) : null}
        {comments.results.length ? (
          comments.results.map((comment) => (
            <Comment
              key={comment.id}
              {...comment}
              setTask={setTask}
              setComments={setComments}
            />
          ))
        ) : currentUser ? (
          <span>No comments yet, be the first to comment!</span>
        ) : (
          <span>No comments... yet</span>
        )}
      </Container>

      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
      </Col>
    </div>
  );
}

export default TaskDetail;
