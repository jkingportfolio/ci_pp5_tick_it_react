import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Alert, Form, Button, Col, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";

function PackEditForm() {
  const [errors, setErrors] = useState({});
  const [tasksListing, setTasks] = useState({ results: [] });
  const [packData, setPackData] = useState({
    title: "",
    pack_description: "",
    tasks: [],
  });
  const { title, pack_description, tasks } = packData;
  const history = useHistory();
  const { id } = useParams();

  /* 
    Fetches all packs from the API
    and determines if owner of pack
  */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/packs/${id}/`);
        const { title, pack_description, tasks, is_owner } = data;
        is_owner
          ? setPackData({
              title,
              pack_description,
              tasks,
            })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  /* 
    Fetches all tasks from the API
  */
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
      } catch (err) {
        console.log(err);
      }
    };

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

  /* 
    Handles change to pack data
  */
  const handleChange = (event) => {
    setPackData({
      ...packData,
      [event.target.name]: event.target.value,
    });
  };

  /* 
    Handles change to task multi select
    dropdown
  */
  const handleMultiSelectChange = (selected) => {
    setPackData({
      ...packData,
      tasks: selected.map((option) => ({
        label: option.label,
        value: option.value,
      })),
    });
  };

  /* 
    Handles submit of pack edit form
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const packDataToSend = {
      title: title,
      pack_description: pack_description,
      tasks: tasks.map((task) => task.value),
    };

    try {
      const { data } = await axiosReq.patch(`/packs/${id}`, packDataToSend);
      const packId = data.id;

      for (let i = 0; i < tasks.length; i++) {
        const taskValue = tasks[i].value;
        const { data: packData } = await axiosReq.get(`/packs/${packId}/`);
        const updatedTasks = [...packData.tasks, taskValue];
        const updateData = { tasks: updatedTasks };
        await axiosReq.patch(`/packs/${packId}/`, updateData);
      }

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
          menuPosition={"fixed"}
          menuPlacement={"auto"}
        />

        {errors?.tasks?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <Button className={`${appStyles.Button}`} type="submit">
        Submit
      </Button>
      <Button
        className={`${appStyles.Button}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </div>
  );

  /* 
    Returns pack edit form
  */
  return (
    <Form onSubmit={handleSubmit}>
      <div className={appStyles.CenterAlignForm}>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${appStyles.TextAlignCenter} d-flex flex-column justify-content-center`}
          >
            <div className={appStyles.SpinnerCentered}></div>
            <h3>Edit pack</h3>
            <div className={appStyles.Content}>{textFields}</div>
          </Container>
        </Col>
      </div>
    </Form>
  );
}

export default PackEditForm;
