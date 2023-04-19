import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import appStyles from "../../App.module.css";
import styles from "../../styles/CommentForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentForm(props) {
  const { task, setTask, setComments, profileImage, profile_id } = props;
  const [comment_body, setCommentBody] = useState("");

  const handleChange = (event) => {
    setCommentBody(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        comment_body,
        task,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setTask((prevTask) => ({
        results: [
          {
            ...prevTask.results[0],
            comments_count: prevTask.results[0].comments_count + 1,
          },
        ],
      }));
      setCommentBody("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            placeholder="my comment..."
            as="textarea"
            value={comment_body}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <div className={styles.ButtonDisplay}>
      <Button
        className={appStyles.Button}
        disabled={!comment_body.trim()}
        type="submit"
      >
        Post
      </Button>
      </div>
    </Form>
  );
}

export default CommentForm;
