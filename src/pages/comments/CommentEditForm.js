import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentForm.module.css";
import appStyles from "../../App.module.css";

function CommentEditForm(props) {
  const { id, comment_body, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(comment_body);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      setShowAlert(true);
      setShowModal(true);     
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowEditForm(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {showAlert && (
        <Modal show={showModal} onHide={handleCloseModal} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Comment updated successfully!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className={styles.ButtonDisplay}>
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
