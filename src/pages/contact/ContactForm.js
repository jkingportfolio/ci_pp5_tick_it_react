import React, { useState } from "react";

import { Alert, Form, Button, Col } from "react-bootstrap";

import appStyles from "../../App.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function ContactForm() {
  const [errors, setErrors] = useState({});

  const [contactData, setContactData] = useState({
    reason: "General Enquiry",
    name: "",
    email: "",
    message: "",
  });
  const { reason, name, email, message } = contactData;

  const history = useHistory();

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("reason", reason);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const { data } = await axiosReq.post("/contact/", formData);
      history.goBack();
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
          <option>Select reason for enquiry</option>
          <option value="LOGIN">Login issue</option>
          <option value="REPORT_POST">Report a task</option>
          <option value="GENERAL">General Enquiry</option>
          <option value="DELETE_ACCOUNT">Delete Account</option>
        </Form.Control>
      </Form.Group>

      {errors?.priority?.map((message, idx) => (
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

      {errors?.task_body?.map((message, idx) => (
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

      {errors?.due_date?.map((message, idx) => (
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

      {errors?.task_body?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <div className={`${appStyles.FlexDisplay}  ${appStyles.JustifyContentCenter}`}>
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
}

export default ContactForm;
