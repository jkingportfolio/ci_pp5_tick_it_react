import React, { useState } from "react";
import { Alert, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import appStyles from "../../App.module.css";
import { useHistory } from "react-router";
import FeedbackMsg from "../../components/FeedBackMsg";

const ContactForm = () => {
  const [form, setForm] = useState({
    reason: "GENERAL",
    name: "",
    email: "",
    message: "",
  });

  const { reason, name, email, message } = form;

  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/contact/", form);
      setShowAlert(true);
      setTimeout(function () {
        history.goBack();
      }, 3500);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
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
        <Button
          className={`${appStyles.Button}`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button className={`${appStyles.Button}`} type="submit">
          Submit
        </Button>
      </div>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      {showAlert && (
        <FeedbackMsg variant="info" message="Thank you for contacting us!" />
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
