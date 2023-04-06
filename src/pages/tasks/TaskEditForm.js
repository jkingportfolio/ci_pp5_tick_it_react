import React, { useEffect, useState } from "react";

import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";

import styles from "../../styles/TaskCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import axios from "axios";

function TaskEditForm() {
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/profile-list/")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [taskData, setTaskData] = useState({
    title: "",
    task_body: "",
    priority: "",
    assigned_to: "",
    due_date: null,
    pack: null,
    completed: false,
  });
  const { title, task_body, priority, assigned_to, due_date, pack, completed } =
    taskData;

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/${id}/`);
        const { title, task_body, priority, assigned_to, completed, is_owner } =
          data;

        is_owner
          ? setTaskData({ title, task_body, priority, assigned_to, completed })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

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
    formData.append("completed", completed);

    try {
      await axiosReq.put(`/tasks/${id}/`, formData);
      history.push(`/tasks/${id}`);
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
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Task Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="task_body"
          value={task_body}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
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
          as="select"
          name="assigned_to"
          className={appStyles.Input}
          value={assigned_to}
          onChange={handleChange}
          aria-label="assigned_to"
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
          ;
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Task Status</Form.Label>

        <Form.Control
          as="select"
          name="completed"
          className={appStyles.Input}
          value={completed}
          onChange={handleChange}
          aria-label="completed"
        >
          <option>Select task completed</option>
          <option value="NO">Yes</option>
          <option value="IN-PROGRESS">In-progress</option>
          <option value="COMPLETE">Complete</option>
        </Form.Control>
      </Form.Group>

      {errors?.completed?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
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
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

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

export default TaskEditForm;
