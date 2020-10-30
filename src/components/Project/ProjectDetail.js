import React from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";

const ProjectDetail = ({ project }) => {
  return (
    <Row
      data-aos="fade-up-right"
      style={{
        backgroundColor: "#343A40",
        marginBottom: "20px",
        padding: "15px",
        boxShadow: "5px 5px 20px #bac3c3",
      }}
    >
      <Col md={7}>
        <div>
          <h2 style={{ color: "#FFD70C" }}> {project.name} </h2>
          <h5>
            {" "}
            <span className="text-white">Category:</span>{" "}
            <span style={{ color: "#9AF332" }}>{project.category}</span>{" "}
          </h5>
          <p className="text-white"> {project.description} </p>
          <p className="text-white">
            <span>Technologies used:</span>
            <span style={{ color: "#9AF332" }}> {project.Technology} </span>
          </p>
          <div style={{ marginBottom: "5px" }}>
            <a target="_blank" rel="noreferrer" href={project.client}>
              <Button
                style={{ width: "48.5%", marginRight: "3px" }}
                variant="secondary"
              >
                Client
              </Button>
            </a>
            <a target="_blank" rel="noreferrer" href={project.server}>
              <Button style={{ width: "48.5%" }} variant="secondary">
                Server
              </Button>
            </a>
          </div>
          <a
            style={{ display: "block" }}
            target="_blank"
            rel="noreferrer"
            href={project.live}
          >
            <Button style={{ width: "100%" }} variant="primary">
              Live Website
            </Button>
          </a>
        </div>
      </Col>
      <Col className="mt-1 pb-2" md={5}>
        {/* <div> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project.img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project.img2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project.img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        {/* </div> */}
      </Col>
    </Row>
  );
};

export default ProjectDetail;
