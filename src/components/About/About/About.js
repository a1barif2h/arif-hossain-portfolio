import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RecentProject from "../../Home/RecentProject/RecentProject";
import RecentBlog from "../RecentBlog/RecentBlog";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <section>
      <article>
        <Container className="mt-5 pt-5">
          <Row className="text-white mt-5 pt-5">
            <Col md={5}>
              <h1 style={{ color: "#FFD700" }} className="text-center mt-5">
                About Me
              </h1>
            </Col>
            <Col className="text-lg-left text-sm-center" md={7}>
              <p>
                Me, Arif Hossain working as a Front End developer. <br /> I have
                come in the web development world only for my passion. I love
                creating and developing websites more than any other works.
              </p>
              <p>
                Now I am working as a freelance web developer and looking
                forward to bringing my passion to a full-time role.
              </p>
            </Col>
          </Row>
          <Skills />
          <RecentProject />
          <RecentBlog />
        </Container>
      </article>
    </section>
  );
};

export default About;
