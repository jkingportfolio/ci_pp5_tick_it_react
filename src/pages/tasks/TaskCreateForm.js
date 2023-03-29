import React, { useState, } from "react";
// import React, { useEffect } from "react";

import { Alert, Form, Button, Row, Col, Container } from "react-bootstrap";

import styles from "../../styles/TaskCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function TaskCreateForm() {
  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title: "",
    task_body: "",
    priority: "LOW",
    assigned_to: "",
    due_date: "",
    pack: "",
  });
  const { title, task_body, priority, assigned_to, due_date, pack } = taskData;

//   const fileInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("task_body", task_body);
    formData.append("priority", priority);
    formData.append("assigned_to", assigned_to);
    formData.append("due_date", due_date);
    formData.append("pack", pack);

    try {
      const { data } = await axiosReq.post("/tasks/", formData);
      history.push(`/tasks/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };


  // useEffect(() => {
  //   async function getUserNames() {
  //     const actualData = await fetch(
  //     `https://tick-it-pp5.herokuapp.com/profiles/`
  //     ).then(response => response.json());
  
  //     console.log(actualData) 
  //   }
  //   getUserNames()
  // }, [])

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
          name="task_body"
          className={appStyles.Input}
          value={task_body}
          onChange={handleChange}
          aria-label="task_body"
        ></Form.Control>
      </Form.Group>

      {errors?.task_body?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Due date</Form.Label>

        <Form.Control
          name="due_date"
          className={appStyles.Input}
          value={due_date}
          onChange={handleChange}
          aria-label="due_date"
        ></Form.Control>
      </Form.Group>

      {errors?.due_date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Assign to Pack</Form.Label>

        <Form.Control
          name="pack"
          className={appStyles.Input}
          value={pack}
          onChange={handleChange}
          aria-label="pack"
        ></Form.Control>
      </Form.Group>

      {errors?.pack?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Priority</Form.Label>

        <Form.Control
          as="select"
          name="priority"
          className={appStyles.Input}
          value={priority}
          onChange={handleChange}
          aria-label="priority"
        >
          <option>Select task priority</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </Form.Control>
      </Form.Group>

      {errors?.priority?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Assigned to</Form.Label>

        <Form.Control
          name="assigned_to"
          className={appStyles.Input}
          value={assigned_to}
          onChange={handleChange}
          aria-label="assigned_to"
        ></Form.Control>
      </Form.Group>

      {errors?.assigned_to?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Dark}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Dark}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                File Upload
              </Form.Label>
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskCreateForm;