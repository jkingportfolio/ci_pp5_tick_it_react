import React, { useState, useEffect } from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  Container,
  OverlayTrigger,
  Tooltip,
  Modal,
  Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropDown } from "../../components/DropDown";
import axios from "axios";
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      history.push(`/`);
    } catch (err) {
      console.log(err);
      setShowDeleteModal(false);
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
      case "COMPLETE":
        return styles["GreenBackground"];
      case "IN-PROGRESS":
        return styles["YellowBackground"];
      case "NOT-STARTED":
        return styles["RedBackground"];
      default:
        return "";
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

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return (
    <Card className={styles.Task}>
      <Card.Body className={styles.cardbody}>
        <div className={styles.PositionedButton}>
          {is_owner && taskDetail && (
            <DropDown
              handleEdit={handleEdit}
              handleDelete={() => setShowDeleteModal(true)}
            />
          )}
        </div>
        <Modal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          centered={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <Link to={`/tasks/${id}`}>
          <Container className={styles.title}>Task: {title}</Container>
        </Link>
        <Container className="align-items-center justify-content-between">
          <div>
            <div
              className={`${styles.Posted} ${styles.TopMargin} ${styles.TopBottom}`}
            >
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
            <div className={styles.Posted}>
              Due Date:
              {due_date && isNaN(Date.parse(due_date)) === false
                ? ` ${new Date(due_date)
                    .toLocaleString("en-GB", options)
                    .replace(/\//g, " ")}`
                : " No date allocated"}
            </div>
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
          <div className={`${styles.Flex} ${backgroundColorClass}`}>
            Status: {completed}
          </div>
          {assigned_to ? (
            <Link
              to={`/profiles/${assigned_to}`}
              className={`${styles.Flex} ${styles.NavLink}`}
            >
              <div>Assigned to: {assignedUser}</div>
            </Link>
          ) : (
            <div className={`${styles.Flex} ${styles.NavLink}`}>
              Assigned to: {assignedUser}
            </div>
          )}
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
