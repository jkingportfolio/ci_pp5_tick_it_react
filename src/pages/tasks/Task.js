import React from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropDown } from "../../components/DropDown";

const Task = (props) => {
  const {
    id,
    owner,
    title,
    profile_id,
    profile_image,
    created_on,
    task_body,
    watching_id,
    taskDetail,
    setTasks,
    comments_count,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleWatch = async () => {
    try {
      const { data } = await axiosRes.post("/watches/", { task: id });
      setTasks((prevtasks) => ({
        ...prevtasks,
        results: prevtasks.results.map((task) => {
          return task.id === id ? { ...task, watching_id: data.id } : task;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnwatch = async () => {
    try {
      await axiosRes.delete(`/watches/${watching_id}/`);
      setTasks((prevTasks) => ({
        ...prevTasks,
        results: prevTasks.results.map((task) => {
          return task.id === id ? { ...task, watching_id: null } : task;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Task}>
      <Card.Body className={styles.cardbody}>
        <div class="position-absolute top-0 end-0">
          {is_owner && taskDetail && (
            <DropDown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
        <Link to={`/tasks/${id}`}>
          <Container className={styles.title}>Task: {title}</Container>
        </Link>
        <Container className="align-items-center justify-content-between">
          <div>
            <Link to={`/profiles/${profile_id}`}>
              <div className={styles.posted}>
                Posted by: {owner} <Avatar src={profile_image} height={55} />
              </div>
            </Link>
          </div>
          <div className={styles.posted}>
            <span className={styles.posted}>Posted on: {created_on}</span>
          </div>
          <div>
            <div>
              <div className={styles.detailtitle}>Detail of task:</div>
              <div className={styles.taskbody}>{task_body}</div>
            </div>
            <div className={styles.posted}>
              This post has : {comments_count} comments!
            </div>
          </div>
        </Container>
      </Card.Body>
      <Card.Body>
        <div className={styles.watchbtn}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You already own this Task!</Tooltip>}
            >
              <i className="far fa-xmark" />
            </OverlayTrigger>
          ) : watching_id ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Unwatch Task!</Tooltip>}
            >
              <span onClick={handleUnwatch}>
                <i className={`fas fa-eye-slash`} />
              </span>
            </OverlayTrigger>
          ) : currentUser ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Watch Task!</Tooltip>}
            >
              <span onClick={handleWatch}>
                <i className={`far fa-eye`} />
              </span>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to watch this Task!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Task;
