import React from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Task = (props) => {
  const {
    id,
    owner,
    title,
    profile_id,
    profile_image,
    updated_on,
    task_body,
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
    </Card>
  );
};

export default Task;
