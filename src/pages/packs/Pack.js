import React from "react";
import styles from "../../styles/Pack.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropDown } from "../../components/DropDown";

const Pack = (props) => {
  const {
    id,
    owner,
    title,
    profile_id,
    profile_image,
    created_on,
    updated_on,
    pack_description,
    members,
    tasks,
    packDetail,
    // setPacks,
  } = props;

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

  return (
    <Link to={`/packs/${id}`}>
    <Card className={styles.Pack}>
      <Card.Body>
        {title}
        <Container className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_on}</span>
            {is_owner && packDetail && <DropDown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />}
          </div>
        </Container>
      </Card.Body>
      <Card.Body>
        {pack_description && <Card.Text>{pack_description}</Card.Text>}
      </Card.Body>
      <Card.Body>
        Created on: {created_on}
        Members: {members}
        Tasks: {tasks}

      </Card.Body>
    </Card>
    </Link>
  );
};

export default Pack;
