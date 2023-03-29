import React from "react";

import { Col, Row, Container } from "react-bootstrap";

import appStyles from "../../App.module.css";

function TaskDetail() {


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Task Detail</p>
        <Container className={appStyles.Content}>
          Body of Task
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Side bar to display other information
      </Col>
    </Row>
  );
}

export default TaskDetail;