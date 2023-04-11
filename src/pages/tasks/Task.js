import React, { useState, useEffect } from 'react';
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropDown } from "../../components/DropDown";
import axios from 'axios';
import appStyles from "../../App.module.css";

const Task = (props) => {
  const {
    id,
    owner,
    title,
    profile_id,
    profile_image,
    created_on,
    due_date,
    priority,
    task_body,
    watching_id,
    taskDetail,
    setTasks,
    assigned_to,
    completed,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const [assignedUser, setAssignedUser] = useState(null);

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

  const backgroundColorClass = (() => {
    switch (completed) {
      case 'COMPLETE':
        return styles['GreenBackground'];
      case 'IN_PROGRESSS':
        return styles['YellowBackground'];
      case 'NO':
        return styles['RedBackground'];
      default:
        return '';
    }
  })();

  useEffect(() => {
    if (assigned_to) {
      axios.get(`/profiles/${assigned_to}/`).then((response) => {
        setAssignedUser(response.data.owner);
      });
    } else {
      setAssignedUser("Nobody yet");
    }
  }, [assigned_to]);

  return (
    <Card className={styles.Task}>
      <Card.Body className={styles.cardbody}>
        <div className={styles.PositionedButton}>
          {is_owner && taskDetail && (
            <DropDown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
        <Link to={`/tasks/${id}`}>
          <Container className={styles.title}>Task: {title}</Container>
        </Link>
        <Container className="align-items-center justify-content-between">
          <div>
            <div className={`${styles.Posted} ${styles.TopMargin} ${styles.TopBottom}`}>
              Posted by:{" "}
              <Link to={`/profiles/${profile_id}`}>
                {" "}
                <span className={styles.Posted}>{owner}</span>{" "}
                <Avatar src={profile_image} height={55} />
              </Link>
            </div>
          </div>
          <div className={styles.Posted}>
            <div className={styles.Posted}>Posted on: {created_on}</div>
          </div>
          <div className={`{${styles.Posted} ${styles.TopMargin}`}>
            <div className={styles.Posted}>Due on: {due_date}</div>
          </div>
          <div className={`{${styles.Posted} ${styles.TopMargin}`}>
            <div className={styles.Posted}>Priority: {priority}</div>
          </div>
          <hr></hr>
          <div>
            <div>
              <div className={styles.Posted}>Detail of task</div>
              <div className={`${styles.TaskBody} ${styles.TopMargin}`}>
                {task_body}
              </div>
            </div>
            <hr></hr>
          </div>
        </Container>
      </Card.Body>
      <Card.Body className={styles.cardbody}>
        <div className={styles.Inline}>
          <div className={`${styles.Flex} ${backgroundColorClass}`}>Task Completed: {completed}</div>
          <div className={styles.Flex}>Assigned to: {assignedUser}</div>
          <div className={`${styles.watchbtn} ${appStyles.AutoMargin}`}>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You already own this Task!</Tooltip>}
              >
                <i className="fa-solid fa-eye-low-vision" />
              </OverlayTrigger>
            ) : watching_id ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Unwatch Task!</Tooltip>}
              >
                <span onClick={handleUnwatch}>
                  <i className={`${"fas fa-eye-slash"} ${styles.RedIcon}`} />
                </span>
              </OverlayTrigger>
            ) : currentUser ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Watch Task!</Tooltip>}
              >
                <span onClick={handleWatch}>
                  <i className={`${"fas fa-eye"} ${styles.GreenIcon}`} />
                </span>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to watch this Task!</Tooltip>}
              >
                <i className="far fa-eye" />
              </OverlayTrigger>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Task;
