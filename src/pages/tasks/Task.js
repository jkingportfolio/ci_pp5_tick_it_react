import React from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Task = (props) => {
  const {
    owner,
    title,
    profile_id,
    profile_image,
    updated_on,
    task_body,
    watches_id,
    taskDetail,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Task}>
      <Card.Body>
        {title}
        <Container className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_on}</span>
            {is_owner && taskDetail}
          </div>
          <div>
            <span>{task_body}</span>
          </div>
        </Container>
      </Card.Body>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {task_body && <Card.Text>{task_body}</Card.Text>}
        <div className={styles.Task}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You already own this Task!</Tooltip>}
            >
              <i className="far fa-xmark" />
            </OverlayTrigger>
          ) : watches_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-plus ${styles.Heart}`} />
              watching
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
              click to watch
            </span>
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
