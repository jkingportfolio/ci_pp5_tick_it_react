import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Alert, Form, Button, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";

import Asset from "../../components/Asset";


function PackCreateForm() {
  const [errors, setErrors] = useState({});
  const [tasksListing, setTasks] = useState({ results: [] });
  const [packData, setPackData] = useState({
    title: "",
    pack_description: "",
    tasks: [],
  });
  const { title, pack_description, tasks } = packData;

  const history = useHistory();

  const [hasLoaded, setHasLoaded] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let allTasks = [];
        let nextUrl = "/tasks/";
        while (nextUrl) {
          const { data } = await axiosReq.get(nextUrl);
          allTasks = [...allTasks, ...data.results];
          nextUrl = data.next;
        }
        setTasks({ results: allTasks });
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
  
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTasks();
    }, 3000);
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
      tasks: selected.map((option) => ({
        label: option.label,
        value: option.value,
      })),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const packDataToSend = {
      title: title,
      pack_description: pack_description,
      tasks: tasks.map((task) => task.value),
    };

    try {
      const { data } = await axiosReq.post("/packs/", packDataToSend);
      const packId = data.id;

      for (let i = 0; i < tasks.length; i++) {
        const taskValue = tasks[i].value;
        const { data: packData } = await axiosReq.get(`/packs/${packId}/`);
        const updatedTasks = [...packData.tasks, taskValue];
        const updateData = { tasks: updatedTasks };
        await axiosReq.patch(`/packs/${packId}/`, updateData);
      }

      setLoading(false);
      history.push(`/packs/${packId}`);
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
          name="tasks"
          options={taskOptions}
          value={tasks}
          onChange={handleMultiSelectChange}
          isMulti
          menuPortalTarget={document.body}
          menuPosition={'fixed'}
          menuPlacement={'auto'}
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
    <React.Fragment>
      {loading && (
        <div className="SpinnerOverlay">
          <Asset spinner />
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <div className={appStyles.CenterAlignForm}>
          <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Container
              className={`${appStyles.Content} ${appStyles.TextAlignCenter} d-flex flex-column justify-content-center`}
            >
              <div className={appStyles.SpinnerCentered}>
                {loading && <Asset spinner />}
              </div>
              <h3>Create pack</h3>
              <div className={appStyles.Content}>{textFields}</div>
            </Container>
          </Col>
        </div>
      </Form>
    </React.Fragment>
  );
}

export default PackCreateForm;
