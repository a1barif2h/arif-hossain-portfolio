import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <div data-aos="flip-down" className="mt-5 pt-5 text-white">
      <h1 className="text-center">Skills</h1>
      <hr
        style={{
          border: "0",
          borderBottom: "2px solid #FF4500",
          marginTop: "-3px",
        }}
      />
      <Row className="mt-5">
        <Col md={5}>
          <h2 className="text-center mt-4">Web Skills</h2>
        </Col>
        <Col
          className="text-lg-left text-sm-center"
          style={{ color: "#ADFF2F" }}
          md={7}
        >
          <p>-Expertise: React, JavaScript, ES6, Bootstrap 4.</p>
          <p>-Comfortable: Node.js, Express.js, MongoDB.</p>
          <p>-Tools: VS code, Git, Webpack, Chrome Dev Tool.</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={5}>
          <h2 className="text-center">Other Skills</h2>
        </Col>
        <Col style={{ color: "#fff" }} md={7}>
          <p className="mt-1 text-lg-left text-sm-center">
            -Softwares: MS Office (Excel, Word, Power Point).
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={5}>
          <h2 className="text-center mt-2">Languages</h2>
        </Col>
        <Col
          className="text-lg-left text-sm-center"
          style={{ color: "#fff" }}
          md={4}
        >
          <p className="mt-1">-English</p>
          <p style={{ marginTop: "-10px" }}>-Bengali</p>
        </Col>
        <Col className="text-lg-left text-sm-center" md={3}>
          <a href="https://www.linkedin.com/in/arifhossain80/">
            <Button variant="danger">Hire Me</Button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
