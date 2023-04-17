import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/CredentialsForm.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import FeedbackMsg from "../../components/FeedBackMsg";
import PasswordCriteria from "../../components/PasswordCriteria"

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      setShowAlert(true);
      setTimeout(function () {
        history.push("/signin");
      }, 3500);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="col-sm-6 mx-auto" md={6}>
        <Container className={`${styles.Form} p-4 `}>
          <h1 className={styles.Header}>Sign up!</h1>
          <p>Please enter your sign up details below.</p>
          <Form onSubmit={handleSubmit}>
            {showAlert && (
              <FeedbackMsg
                variant="info"
                message="Signup successful, redirecting to log in page!"
              />
            )}
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
              <PasswordCriteria />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button className={appStyles.Button} type="submit">
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
          <p className={`${appStyles.DarkText} ${styles.TopMargin}`}>
            Already have an account?
          </p>
          <Link to="/signin">
            <p className={`${appStyles.DarkText}`}>
              Click <span className={styles.Link}>here </span>to Log in!
            </p>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
