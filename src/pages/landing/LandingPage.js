import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/LandingPage.module.css";
import appStyles from "../../App.module.css";


const LandingPage = () => {
  return (
    <>
      
      <Row className="text-center">
        <Col sm={12}>
          <Container className={styles.landingbox}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1 className="mb-4">Welcome to Tick It!</h1>
                </Card.Title>
                <Card.Text className="font-weight-bold">
                  Tick It is a productivity managing site.
                  <br />
                  <br />
                  Are you ready to create and complete some tasks?!
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Link to="/signup">
                  <Button
                    className={`${appStyles.button} mb-3`}
                  >
                    Sign up
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button className={`${appStyles.button} mb-3`}>
                    Log in
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      <Container>
        <footer>
          <div className="float-left text-light">
            <p>Created by Jamie King</p>
          </div>
          <div className="float-right pb-3">
            <a
              href="https://github.com/jkingportfolio/ci_pp5_tick_it_react"
              aria-label="Check the website GitHub page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/jamie-king-25938123"
              aria-label="Visit me on LinkedIn (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default LandingPage;