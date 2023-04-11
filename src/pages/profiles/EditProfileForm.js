import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { Form, Button, Image, Col, Container, Alert } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";
import styles from "../../styles/ProfilePage.module.css";
import FeedbackMsg from "../../components/FeedBackMsg";

const EditProfileForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    job_role: "",
    image: "",
  });
  const { name, job_role, image } = profileData;
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, job_role, image } = data;
          setProfileData({ name, job_role, image });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("job_role", job_role);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      setShowAlert(true);
      setTimeout(function () {
        history.goBack();
      }, 3500);
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          as="input"
          value={name}
          onChange={handleChange}
          name="name"
          rows={7}
          className={appStyles.TextAlignLeft}
        />
      </Form.Group>

      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Job Role</Form.Label>
        <Form.Control
          as="input"
          value={job_role}
          onChange={handleChange}
          name="job_role"
          rows={7}
        />
      </Form.Group>

      {errors?.job_role?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${appStyles.Button}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${appStyles.Button}`} type="submit">
        Save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      {showAlert && (
          <FeedbackMsg
            variant="info"
            message="Profile updated successfully. Taking you back to your profile's page..."
          />
        )}
      <div className={appStyles.Form}>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} d-flex flex-column justify-content-center`}
          >
            <div className={appStyles.TextAlignCenter}>
              <Form.Group>
                {image && (
                  <figure>
                    <Image src={image} fluid />
                  </figure>
                )}
                {errors?.image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                <Form.File
                  id="image-upload"
                  ref={imageFile}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files.length) {
                      setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                      });
                    }
                  }}
                />
                <hr />
                <div
                  className={`${styles.Border} ${styles.DivFlexChild} ${styles.ButtonContainer} ${styles.TopMargin}`}
                >
                  <Button
                    className={`${styles.PasswordButton}`}
                    as={Link}
                    to={`/profiles/${id}/edit/password`}
                  >
                    Change Password
                  </Button>
                </div>
                <div>{textFields}</div>
              </Form.Group>
            </div>
          </Container>
        </Col>
      </div>
    </Form>
  );
};

export default EditProfileForm;
