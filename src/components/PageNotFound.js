import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={12}>
        <Container className={appStyles.Content}>
          <h3 className="my-3">Opps! This page has not been found</h3>
          <Link to="/">
            <Button className={`${appStyles.Button} my-3`}>
              Go to the home page
            </Button>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default PageNotFound;