import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Alert, Form, Button, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import axios from "axios";
import styles from "../../styles/PackCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import TasksListings from "../tasks/TasksListings";

function PackCreateForm() {
  const [errors, setErrors] = useState({});
  // const [users, setUsers] = useState([]);
  const [tasksListing, setTasks] = useState({ results: [] });
  const [packData, setPackData] = useState({
    title: "",
    pack_description: "",
    tasks: [],
  });
  const { title, pack_description, tasks } = packData;

  const history = useHistory();

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/`);
        setTasks(data);
        setHasLoaded(true);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTasks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);


  const taskOptions = tasksListing.results.map((taskListing) => ({
    label: taskListing.title,
    value: taskListing.id,
  }));



  const handleChange = (event) => {
    setPackData({
      ...packData,
      [event.target.name]: event.target.value,
    });
  };

  const handleMultiSelectChange = (selected) => {
  setPackData({
    ...packData,
    tasks: selected.map((option) => ({ label: option.label, value: option.value })),
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
        <MultiSelect
          options={taskOptions}
          value={tasks}
          onChange={handleMultiSelectChange}
          labelledBy="Select"
          className={styles.MultiSelect}
        />

        {errors?.tasks?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

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
