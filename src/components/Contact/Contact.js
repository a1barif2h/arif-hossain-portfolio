import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <Container className="mt-5 pt-5">
      <Row className="mt-5 pt-5">
        <Col data-aos="fade-right" md={7}>
          <h3 className="mt-3" style={{ color: "#28A745" }}>
            Tell me how can I help you:
          </h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                placeholder="Type Your Massage"
                as="textarea"
                rows={5}
              />
            </Form.Group>
            <Button style={{ width: "100%" }} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col data-aos="fade-left" className="mt-5 pt-5" md={5}>
          <h3 className="text-white mb-4">You also find me in -</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/arifhossain80/"
          >
            <Button variant="primary">
              <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
              <span> Linkedin</span>
            </Button>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/a1barif2h"
          >
            <Button className="ml-3 mr-3" variant="secondary">
              <FontAwesomeIcon className="social-icons" icon={faGithub} />
              <span> Github</span>
            </Button>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100008338565470"
          >
            <Button variant="primary">
              <FontAwesomeIcon className="social-icons" icon={faFacebook} />
              <span> Facebook</span>
            </Button>
          </a>

          <address className="text-white mt-4">
            Address: <br /> Delpara, Kutubpur, <br /> Fatullah, Narayanganj.
          </address>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
