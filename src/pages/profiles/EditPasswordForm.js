import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";

const UserPasswordForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;
  const [errors, setErrors] = useState({});

  /* 
    Handles changes to the input fields
  */
  const handleChange = (event) => {
    setUserData({
      [event.target.name]: event.target.value,
    });
  };

  /*
    Handles the edit of user password
  */
  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      history.push("/");
    }
  }, [currentUser, history, id]);

  /* 
    Handles the new password submission
    Displays a feedback message to the user on successful password change
    Redirects the user to the profile page after a short delay
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      setTimeout(function () {
        history.goBack();
      }, 2500);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center font-weight-bold" md={8}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                placeholder="type your new password"
                type="password"
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
                className={`${appStyles.Input} text-center`}
                aria-label="new password"
              />
            </Form.Group>

            {errors?.new_password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                placeholder="confirm new password"
                type="password"
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
                className={`${appStyles.Input} text-center`}
                aria-label="confirm new password"
              />
            </Form.Group>

            {errors?.new_password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
              type="submit"
              className={`mx-2 my-2 ${appStyles.button}`}
              onMouseDown={(event) => event.preventDefault()}
            >
              Save
            </Button>
            <Button
              onMouseDown={(event) => event.preventDefault()}
              className={`mx-2 ${appStyles.button}`}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UserPasswordForm;
