import React, { useState } from "react";
import axios from "axios";
import { Alert, Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/CredentialsForm.module.css";
import appStyles from "../../App.module.css";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  /* 
    Handles submit of login form
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/");
      console.log({ setCurrentUser });
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  /* 
    Handle changes input fields
  */
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  /* 
    Returns login form
  */
  return (
    <Row className={styles.Row}>
      <Col className="col-sm-6 mx-auto" md={6}>
        <Container className={`${styles.Form} p-4 `}>
          <h1 className={styles.Header}>Log in!</h1>
          <p>Please enter your credentials below.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                className={styles.Input}
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className={styles.Input}
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button className={appStyles.Button} type="submit">
              Log in
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
          <p className={`${appStyles.DarkText} ${styles.TopMargin}`}>Dont have an account?</p>
          <Link to="/signup">
          <p className={`${appStyles.DarkText}`}>Click <span className={appStyles.DarkText}>here </span>to Sign up!</p>
          </Link>
        </Container>
      </Col>
    </Row>
  );
}

export default SignInForm;
