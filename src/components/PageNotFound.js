import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import { Link } from "react-router-dom";
import Error from "../assets/404.png";

const PageNotFound = () => {
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={12}>
        <Container className={appStyles.Content}>
          <Image
            className={`${appStyles.Image} img-fluid`}
            src={Error}
            alt="Page not found image"
          />
          <div>
            <Link to="/">
              <Button className={`${appStyles.Button} my-3`}>
                Return Home
              </Button>
            </Link>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default PageNotFound;
