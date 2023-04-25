import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import {
  Form,
  Button,
  Image,
  Col,
  Container,
  Alert,
  Modal,
  Row,
} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";
import styles from "../../styles/ProfilePage.module.css";

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
  const [showModal, setShowModal] = useState(false);

  /* 
    Fetch profile data based on auth user id
  */
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

  /* 
    Handle change to ProfileData
  */
  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  /* 
    Handle the submit of Profile edit
    form
  */
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
      setShowModal(true);
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  /* 
    Handle close of feedback modal
  */
  const handleCloseModal = () => {
    setShowModal(false);
    history.goBack();
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
          aria-label="Name input"
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
          aria-label="Job role input"
        />
      </Form.Group>

      {errors?.job_role?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button className={`${appStyles.Button}`} type="submit">
        Save
      </Button>
      <Button
        className={`${appStyles.Button}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </>
  );

  /* 
    Returns form to edit user profile and feedback
    modal
  */
  return (
    <Row>
      <Col className={`${appStyles.AutoMargin} "py-2 p-0 p-lg-2"`} lg={8}>
        <div className={`${appStyles.TextAlignCenter} ${appStyles.AutoMargin}`}>
          <h1 className={`${appStyles.LightText}`}>Edit Profile</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          {showModal && (
            <Modal show={showModal} onHide={handleCloseModal} centered={true}>
              <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
              </Modal.Header>
              <Modal.Body>Profile updated successfully!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
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
                        <Image src={image} fluid aria-label="Profile image" />
                      </figure>
                    )}
                    {errors?.image?.map((message, idx) => (
                      <Alert variant="warning" key={idx}>
                        {message}
                      </Alert>
                    ))}
                    <Form.File
                      id="image-upload"
                      aria-label="Profile image"
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
      </Col>
    </Row>
  );
};

export default EditProfileForm;
