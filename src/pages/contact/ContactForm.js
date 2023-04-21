import React, { useState } from "react";
import { Alert, Form, Button, Col, Modal } from "react-bootstrap";
import axios from "axios";
import appStyles from "../../App.module.css";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const [form, setForm] = useState({
    reason: "GENERAL",
    name: "",
    email: "",
    message: "",
  });

  const { reason, name, email, message } = form;

  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/contact/", form);
      setShowModal(true);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    history.push("/");
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Reason</Form.Label>

        <Form.Control
          as="select"
          name="reason"
          className={appStyles.Input}
          value={reason}
          onChange={handleChange}
          aria-label="reason"
        >
          <option value="GENERAL">General Enquiry</option>
          <option value="LOGIN">Login issue</option>
          <option value="REPORT_POST">Report a task</option>
          <option value="DELETE_ACCOUNT">Delete Account</option>
        </Form.Control>
      </Form.Group>

      {errors?.reason?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Name</Form.Label>

        <Form.Control
          as="input"
          name="name"
          className={appStyles.Input}
          value={name}
          onChange={handleChange}
          aria-label="name"
        ></Form.Control>
      </Form.Group>

      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Email</Form.Label>

        <Form.Control
          name="email"
          type="email"
          className={appStyles.Input}
          value={email}
          onChange={handleChange}
          aria-label="email"
        ></Form.Control>
      </Form.Group>

      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Message</Form.Label>

        <Form.Control
          as="textarea"
          name="message"
          className={appStyles.Input}
          value={message}
          onChange={handleChange}
          aria-label="message"
          rows={7}
        ></Form.Control>
      </Form.Group>

      {errors?.message?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <div
        className={`${appStyles.FlexDisplay}  ${appStyles.JustifyContentCenter}`}
      >
        <Button className={`${appStyles.Button}`} type="submit">
          Submit
        </Button>
        <Button
          className={`${appStyles.Button}`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
      </div>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      {showModal && (
        <Modal show={showModal} onHide={handleCloseModal} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you for contacting us, we will get back to you shortly!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className={appStyles.CenterAlignForm}>
        <Col md={7} lg={8}>
          <div
            className={`${appStyles.Content} ${appStyles.TextAlignCenter} d-flex flex-column justify-content-center`}
          >
            <h3>Contact us</h3>
            <div className={appStyles.Content}>{textFields}</div>
          </div>
        </Col>
      </div>
    </Form>
  );
};

export default ContactForm;
