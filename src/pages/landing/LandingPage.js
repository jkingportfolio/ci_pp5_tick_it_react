/*
  LandingPage component was inspired by 
  aleksandracodes (https://github.com/aleksandracodes).
  The file for this component can be found here
  (https://github.com/aleksandracodes/ci_pp5_snapfood/blob/main/src/components/Landing.js). 
*/
import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/LandingPage.module.css";
import appStyles from "../../App.module.css";


const LandingPage = () => {

  /* 
    Returns landing page with buttons to 
   login or signup
  */
  return (
    <>      
      <Row className="text-center">
        <Col className={styles.LandingBoxPos} sm={12}>
          <Container className={styles.LandingBoxPos}>
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
                <Link to="/signin">
                  <Button className={`${appStyles.Button} mb-3`}>
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    className={`${appStyles.Button} mb-3`}
                  >
                    Sign up
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      <Container className={styles.FooterWidth}>
        <footer>
          <div className="float-left text-light">
            <p>Created by Jamie King</p>
          </div>
          <div className="float-right pb-3">
            <a
              href="https://github.com/jkingportfolio/"
              aria-label="Visit me on Github (opens in new tab)"
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