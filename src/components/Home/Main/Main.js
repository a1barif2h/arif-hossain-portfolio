import React from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import arif from "../../../images/Arif.jpg";
import "./Main.css";

const Main = () => {
  return (
    <main className="pt-5 mb-5">
      <Row>
        <Col className="mb-5" style={{ color: "#fff" }} md={7}>
          <p>Hi there,</p>
          <h2>
            I'm<span style={{ color: "#FFD717" }}> Mohammad Arif Hossain</span>
          </h2>
          <h4 style={{ color: "#ADFF2F" }}>Front End Developer</h4>
          <p>
            Expert in developing Single Page Application(SPA) using React and
            Node.js. <br /> I've a good knowledge in Javascript, ES6,
            Bootstrap-4 and also comfortable <br /> with Material UI, Express.js
            and MongoDB.
          </p>
          <p>
            Client satisfaction is my pride. Love to develop modern and
            impressive <br /> websites for my clients and always responsible for
            the job.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/arifhossain80/"
          >
            <Button variant="danger">HIRE ME</Button>
          </a>

          <Link to="/about">
            <Button className="ml-2" variant="primary">
              MORE ABOUT ME
            </Button>
          </Link>
        </Col>
        <Col
          className="mt-5"
          style={{ boxSizing: "border-box", margin: "0", padding: "0" }}
          md={5}
        >
          <div className="main-logo">
            <div className="design">
              <img src={arif} alt="profile images" />
              <div id="rotate-border"></div>
              <div className="grid">
                <div className="data-white"></div>
                <div></div>
                <div></div>
                <div className="data-white"></div>
              </div>
              <div className="blend">
                <img src={arif} alt="profile images" />
                <div className="grid">
                  <div></div>
                  <div className="data-white"></div>
                  <div className="data-white"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Main;
