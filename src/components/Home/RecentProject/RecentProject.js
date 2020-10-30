import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import ProjectDetail from "./ProjectDetail";
import creative from "../../../images/creative.png";
import volunteer from "../../../images/volunteer.png";
import travel from "../../../images/travel.png";
import { Link } from "react-router-dom";

const RecentProject = () => {
  const projectData = [
    {
      id: 1,
      name: "Creative Agency",
      category: "(Full-Stack)",
      img: creative,
      client: "https://github.com/a1barif2h/creative-agency-client",
      server: "https://github.com/a1barif2h/creative-agency-server",
      live: "https://creative-agency-dd81b.web.app/",
      Technology:
        "React.js, Node.js, MongoDB, Bootstrap4, React Bootstrap, MaterialUI, React-Router, Heroku, Firebase Deploy, Firebase Authentication,",
    },
    {
      id: 2,
      name: "Volunteer Network",
      category: "(Full-Stack)",
      img: volunteer,
      client: "https://github.com/a1barif2h/volunteer-network-client",
      server: "https://github.com/a1barif2h/volunteer-network-server",
      live: "https://volunteer-network-b26a7.web.app/",
      Technology:
        "React.js, Node.js, MongoDB, Bootstrap4, React Bootstrap, MaterialUI, React-Router, Heroku, Firebase Deploy, Firebase Authentication,",
    },
    {
      id: 3,
      name: "Travel Guru",
      category: "(Front-End)",
      img: travel,
      client: "https://github.com/a1barif2h/travel-guru",
      live: "https://travel-guru-d3cf4.web.app/",
      Technology:
        "React.js, Bootstrap4, React Bootstrap, MaterialUI, React-Router, Firebase Deploy, Firebase Authentication,",
    },
  ];
  return (
    <section data-aos="fade-left" className="mt-5 pt-5">
      <h1 className="text-center text-white pt-5">Recent Projects</h1>
      <hr
        className="mb-md-5 mb-sm-3"
        style={{
          border: "0",
          borderBottom: "2px solid #FF4500",
          marginTop: "-3px",
        }}
      />
      <Row className="mb-5">
        {projectData.map((project) => (
          <Col data-aos="zoom-in" key={project.id} md={4}>
            <ProjectDetail project={project} />
          </Col>
        ))}
      </Row>
      <Link to="/project">
        <Button style={{ width: "100%" }} variant="danger">
          View All Projects
        </Button>
      </Link>
    </section>
  );
};

export default RecentProject;
