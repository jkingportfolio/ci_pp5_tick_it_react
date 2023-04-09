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
            handleDelete={handleDelete}
          />
        )}
      </Row>
    </>
  );
};

export default Comment;
