import React, { useEffect, useState } from "react";
import styles from "../../styles/Pack.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropDown } from "../../components/DropDown";
import appStyles from "../../App.module.css";

const Pack = (props) => {
  const {
    id,
    owner,
    title,
    profile_id,
    profile_image,
    created_on,
    pack_description,
    tasks,
    packDetail,
  } = props;

  const [taskTitles, setTaskTitles] = useState([]);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/packs/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/packs/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchTaskTitles = async () => {
      const titles = await Promise.all(
        tasks.map(async (taskId) => {
          const response = await axiosRes.get(`/tasks/${taskId}`);
          return response.data.title;
        })
      );
      setTaskTitles(titles);
    };
    fetchTaskTitles();
  }, [tasks]);

  return (
    <Card className={styles.Pack}>
      <Card.Body className={styles.cardbody}>
        <div className={styles.PositionedButton}>
          {is_owner && packDetail && (
            <DropDown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
        <Link to={`/packs/${id}`}>
          <Container className={styles.title}>Pack: {title}</Container>
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
          <hr></hr>
          <div>
            <div>
              <div className={styles.Posted}>Detail of pack</div>
              <div className={`${styles.PackBody} ${styles.TopMargin}`}>
                {pack_description}
              </div>
            </div>
            <hr></hr>
            <div className={appStyles.DarkText}>
              Tasks:
              <ul>
                {taskTitles.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Pack;
