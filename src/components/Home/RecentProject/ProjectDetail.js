import React from "react";
import { Button, Card } from "react-bootstrap";

const ProjectDetail = ({ project }) => {
  return (
    <div className="pb-3 m-sm-auto">
      <Card
        style={{
          width: "22rem",
          height: "560px",
          boxShadow: "0 0 20px #bac3c3",
        }}
      >
        <Card.Img
          style={{ width: "100%", height: "250px" }}
          variant="top"
          src={project.img}
        />
        <Card.Body style={{ backgroundColor: "#343A40" }}>
          <div style={{ height: "200px" }}>
            <Card.Title style={{ color: "#FFD700" }}>
              {" "}
              {project.name}{" "}
            </Card.Title>
            <Card.Text style={{ color: "#ADFF2F" }}>
              {project.category}
            </Card.Text>
            <Card.Text className="text-white">
              <span style={{ fontWeight: "bold" }}>Technology used:</span>{" "}
              {project.Technology}
            </Card.Text>
          </div>
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectDetail;
