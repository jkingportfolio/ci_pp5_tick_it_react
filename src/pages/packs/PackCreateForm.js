import React, { useState, useEffect } from "react";

import { Alert, Form, Button, Col, Container } from "react-bootstrap";

import styles from "../../styles/PackCreateEditForm.module.css";
import appStyles from "../../App.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import axios from "axios";

function PackCreateForm() {
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/profile-list/")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [packData, setPackData] = useState({
    title: "",
    pack_description: "",
    tasks: "",
  });
  const { title, pack_description, tasks } = packData;

  const history = useHistory();

  const handleChange = (event) => {
    setPackData({
      ...packData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("pack_description", pack_description);
    formData.append("tasks", tasks);

    try {
      const { data } = await axiosReq.post("/packs/", formData);
      history.push(`/packs/${data.id}`);
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
        <Form.Label>Title</Form.Label>

        <Form.Control
          name="title"
          className={appStyles.Input}
          value={title}
          onChange={handleChange}
          aria-label="title"
        ></Form.Control>
      </Form.Group>

      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Details</Form.Label>

        <Form.Control
          as="textarea"
          name="pack_description"
          className={appStyles.Input}
          value={pack_description}
          onChange={handleChange}
          aria-label="pack_description"
        ></Form.Control>
      </Form.Group>

      {errors?.pack_description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Tasks</Form.Label>

        <Form.Control
          as="select"
          name="tasks"
          className={appStyles.Input}
          value={tasks}
          onChange={handleChange}
          aria-label="tasks"
        >
          <option>Select a task</option>
          ;
        </Form.Control>
      </Form.Group>

      {errors?.tasks?.map((message, idx) => (
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
        Submit
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <div className={appStyles.CenterAlignForm}>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${appStyles.TextAlignCenter} d-flex flex-column justify-content-center`}
          >
            <h3>Create pack</h3>
            <div className={appStyles.Content}>{textFields}</div>
          </Container>
        </Col>
      </div>
    </Form>
  );
}

export default PackCreateForm;
