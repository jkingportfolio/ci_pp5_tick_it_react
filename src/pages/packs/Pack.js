import React from "react";
import styles from "../../styles/Pack.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
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
    setPacks,
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

//   const handleWatch = async () => {
//     try {
//       const { data } = await axiosRes.post("/watches/", { pack: id });
//       setTasks((prevtasks) => ({
//         ...prevtasks,
//         results: prevtasks.results.map((pack) => {
//           return pack.id === id ? { ...pack, watching_id: data.id } : pack;
//         }),
//       }));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleUnwatch = async () => {
//     try {
//       await axiosRes.delete(`/watches/${watching_id}/`);
//       setTasks((prevTasks) => ({
//         ...prevTasks,
//         results: prevTasks.results.map((pack) => {
//           return pack.id === id ? { ...pack, watching_id: null } : pack;
//         }),
//       }));
//     } catch (err) {
//       console.log(err);
//     }
//   };

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
          <div>
            <span>{pack_description}</span>
            {/* <span>
              This post has : {comments_count} comments!
            </span> */}
          </div>
        </Container>
      </Card.Body>
      {/* <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {pack_description && <Card.Text>{pack_description}</Card.Text>}
        <div className={styles.Pack}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You already own this Pack!</Tooltip>}
            >
              <i className="far fa-xmark" />
            </OverlayTrigger>
          ) : watching_id ? (
            <span onClick={handleUnwatch}>
              <i className={`fas fa-eye-slash`} />
              Un watch
            </span>
          ) : currentUser ? (
            <span onClick={handleWatch}>
              <i className={`far fa-eye`} />
              Watch
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
      </Card.Body> */}
    </Card>
    </Link>
  );
};

export default Pack;
