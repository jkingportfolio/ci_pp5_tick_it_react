import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/CredentialsForm.module.css";
import appStyles from "../../App.module.css";
import { Form, Button, Col, Row, Container, Alert, Modal } from "react-bootstrap";
import axios from "axios";
import PasswordCriteria from "../../components/PasswordCriteria";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

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
      setShowModal(true);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    history.push(`/signin`);    
  };

  return (
    <Row className={styles.Row}>
      <Col className="col-sm-6 mx-auto" md={6}>
        <Container className={`${styles.Form} p-4 `}>
          <h1 className={styles.Header}>Sign up!</h1>
          <p>Please enter your sign up details below.</p>
          <Form onSubmit={handleSubmit}>
            {showModal && (
              <Modal show={showModal} onHide={handleCloseModal} centered={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Account created successfully!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
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
              Click <span className={appStyles.DarkText}>here </span>to Log in!
            </p>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
