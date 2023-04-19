import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import appStyles from "../../App.module.css";
import { DropDown } from "../../components/DropDown";
import CommentEditForm from "./CommentEditForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { Modal, Button } from 'react-bootstrap';


const Comment = (props) => {
  const {
    id,
    profile_id,
    profile_image,
    owner,
    updated_on,
    comment_body,
    setTask,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setTask((prevTask) => ({
        results: [
          {
            ...prevTask.results[0],
            comments_count: prevTask.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
    setShowDeleteModal(false);
  };

  return (
    <>
      <hr />
      <Row>
        <Col md={1} className={appStyles.AutoMargin}>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} />
          </Link>
        </Col>
        <Col className="align-self-center ml-2">
          <div className={styles.Owner}>{owner}</div>
          <div className={styles.Date}>{updated_on}</div>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              comment_body={comment_body}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <div>{comment_body}</div>
          )}
        </Col>
        {is_owner && !showEditForm && (
          <DropDown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={() => setShowDeleteModal(true)}
          />
        )}
      </Row>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this comment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Comment;
