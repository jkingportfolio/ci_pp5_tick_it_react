import React, { useEffect, useState } from "react";
import { Form, Button, Col, Container, Alert } from "react-bootstrap";
import styles from "../../styles/TaskCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import axios from "axios";
import FeedbackMsg from "../../components/FeedBackMsg";

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
    due_date: "",
    pack: "",
    completed: "No",
  });
  const { title, task_body, priority, assigned_to, due_date, pack, completed } =
    taskData;

  const history = useHistory();
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/${id}/`);
        const {
          title,
          task_body,
          priority,
          assigned_to,
          due_date,
          pack,
          completed,
          is_owner,
        } = data;

        is_owner
          ? setTaskData({
              title,
              task_body,
              priority,
              assigned_to,
              due_date,              
              pack,
              completed,
            })
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
    console.log("DATE:" + due_date)
    console.log("PACK:" + pack)
    console.log("Assigned to:" + assigned_to)
    formData.append("title", title);
    formData.append("task_body", task_body);
    formData.append("priority", priority);
    if (assigned_to !== null && assigned_to !== "No one") {
      formData.append("assigned_to", assigned_to);
    }    
    if (due_date !== null && due_date !== '') {
      formData.append("due_date", due_date);
    }
    if (pack !== null && pack !== '') {
      formData.append("pack", pack);
    }
      formData.append("pack", pack);
    formData.append("completed", completed);

    try {
      await axiosReq.put(`/tasks/${id}/`, formData);
      setShowAlert(true);
      setTimeout(function () {
        history.push(`/tasks/${id}`);
      }, 3500);
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
          type="date"
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
          <option>No one</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
          ;
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Task completed</Form.Label>

        <Form.Control
          as="select"
          name="completed"
          className={appStyles.Input}
          value={completed}
          onChange={handleChange}
          aria-label="completed"
        >
          <option>Select task completed</option>
          <option value="NO">No</option>
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
        className={`${appStyles.Button}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${appStyles.Button}`} type="submit">
        Save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      {showAlert && (
          <FeedbackMsg
            variant="info"
            message="Task updated successfully."
          />
        )}
      <div className={appStyles.Form}>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <div className={appStyles.Content}>
              {textFields}
            </div>
          </Container>
        </Col>
      </div>
    </Form>
  );
}

export default TaskEditForm;
