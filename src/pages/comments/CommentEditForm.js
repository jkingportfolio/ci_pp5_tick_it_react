import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentForm.module.css";
import appStyles from "../../App.module.css";

function CommentEditForm(props) {
  const { id, comment_body, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(comment_body);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        comment_body: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                comment_body: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className={styles.Buttondisplay}>
        <Button
          className={appStyles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </Button>
        <Button
          className={appStyles.Button}
          disabled={!comment_body.trim()}
          type="submit"
        >
          Save
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;