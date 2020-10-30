import React from "react";
import creative from "../../images/creative.png";
import creative2 from "../../images/creative2.png";
import creative3 from "../../images/createve3.png";
import volunteer from "../../images/volunteer.png";
import volunteer2 from "../../images/volunteer2.png";
import volunteer3 from "../../images/volunteer3.png";
import travel from "../../images/travel.png";
import travel2 from "../../images/travel2.png";
import travel3 from "../../images/travel3.png";
import eSchool from "../../images/eSchool.png";
import eSchool2 from "../../images/eSchool2.png";
import eSchool3 from "../../images/eSchool3.png";
import hot from "../../images/hot.png";
import hot2 from "../../images/hot2.png";
import hot3 from "../../images/hot3.png";
import panda from "../../images/panda.png";
import panda2 from "../../images/panda2.png";
import panda3 from "../../images/panda3.png";
import cuda from "../../images/cuda.png";
import cuda2 from "../../images/cuda2.png";
import cuda3 from "../../images/cuda3.png";
import fadelicious from "../../images/fadelicious.png";
import fadelicious2 from "../../images/fadelicious2.png";
import fadelicious3 from "../../images/fadelicious3.png";
import { Col, Container, Row } from "react-bootstrap";
import ProjectDetail from "./ProjectDetail";

const Project = () => {
  const projectData = [
    {
      id: 1,
      name: "Creative Agency",
      category: "(Full-Stack)",
      img1: creative,
      img2: creative2,
      img3: creative3,
      client: "https://github.com/a1barif2h/creative-agency-client",
      server: "https://github.com/a1barif2h/creative-agency-server",
      live: "https://creative-agency-dd81b.web.app/",
      description:
        "Developing responsive web applications across platforms using React.js, React Bootstrap.Set Private Route to log in with firebase authentication.Create node.js server-side and MongoDB database.Deploy client-side to firebase and server-side to Heroku.",
      Technology:
        "React.js, Node.js, MongoDB, Bootstrap4, React Bootstrap, MaterialUI, React-Router, Heroku, Firebase Deploy, Firebase Authentication,",
    },
    {
      id: 2,
      name: "Volunteer Network",
      category: "(Full-Stack)",
      img1: volunteer,
      img2: volunteer2,
      img3: volunteer3,
      client: "https://github.com/a1barif2h/volunteer-network-client",
      server: "https://github.com/a1barif2h/volunteer-network-server",
      live: "https://volunteer-network-b26a7.web.app/",
      description:
        "Developing responsive web applications across platforms using React.js, React Bootstrap.Set Private Route to log in with firebase authentication.Create node.js server-side and MongoDB database.Deploy client-side to firebase and server-side to Heroku.",
      Technology:
        "React.js, Node.js, MongoDB, Bootstrap4, React Bootstrap, MaterialUI, React-Router, Heroku, Firebase Deploy, Firebase Authentication,",
    },
    {
      id: 3,
      name: "Travel Guru",
      category: "(Front-End)",
      img1: travel,
      img2: travel2,
      img3: travel3,
      client: "https://github.com/a1barif2h/travel-guru",
      live: "https://travel-guru-d3cf4.web.app/",
      description:
        "Developing responsive web applications across platforms using React.js, React Bootstrap.Set Private Route to log in with firebase authentication.Deploy client-side to firebase.",
      Technology:
        "React.js, Bootstrap4, React Bootstrap, MaterialUI, React-Router, Firebase Deploy, Firebase Authentication,",
    },
    {
      id: 4,
      name: "E School",
      category: "(Front-End)",
      img1: eSchool,
      img2: eSchool2,
      img3: eSchool3,
      client: "https://github.com/a1barif2h/E-School",
      live: "https://a1barif2h.github.io/E-School/",
      description:
        "Developing responsive web applications across platforms using HTML, CSS, Bootstrap.It's simple online school.",
      Technology: "HTML, CSS, Bootstrap",
    },
    {
      id: 5,
      name: "Hot Gadgets",
      category: "(Front-End)",
      img1: hot,
      img2: hot2,
      img3: hot3,
      client: "https://github.com/a1barif2h/hot-gadgets",
      live: "https://a1barif2h.github.io/hot-gadgets/",
      description:
        "Developing responsive web applications across platforms using HTML, CSS, Bootstrap.It's simple online e-commerce site.",
      Technology: "HTML, CSS, Bootstrap",
    },
    {
      id: 6,
      name: "Panda Commerce",
      category: "(Front-End)",
      img1: panda,
      img2: panda2,
      img3: panda3,
      client: "https://github.com/a1barif2h/panda-commerce",
      live: "https://a1barif2h.github.io/panda-commerce/",
      description:
        "Developing responsive web applications across platforms using HTML, CSS, Bootstrap.It's simple online e-commerce site.",
      Technology: "HTML, CSS, Bootstrap",
    },
    {
      id: 7,
      name: "Cuda Single Page Portfolio",
      category: "(Front-End)",
      img1: cuda,
      img2: cuda2,
      img3: cuda3,
      client: "https://github.com/a1barif2h/Cuda-Single-Page-Portfolio",
      live: "https://a1barif2h.github.io/Cuda-Single-Page-Portfolio/",
      description: "Convert PSD to HTML.This page is not responsive.",
      Technology: "HTML, CSS,jQuery",
    },
    {
      id: 8,
      name: "Fadelicious",
      category: "(Front-End)",
      img1: fadelicious,
      img2: fadelicious2,
      img3: fadelicious3,
      client: "https://github.com/a1barif2h/Fadelicious-psd-to-html",
      live: "https://a1barif2h.github.io/Fadelicious-psd-to-html/",
      description: "Convert PSD to HTML.This page is not responsive.",
      Technology: "HTML, CSS",
    },
  ];
  return (
    <section className="mt-5 pt-5">
      <Container>
        <h1 className="text-center text-white pt-5">Projects</h1>
        <hr
          className="mb-md-5 mb-sm-3"
          style={{
            border: "0",
            borderBottom: "2px solid #FF4500",
            marginTop: "-3px",
          }}
        />
        <article>
          {projectData.map((project) => (
            <ProjectDetail key={project.id} project={project} />
          ))}
        </article>
      </Container>
    </section>
  );
};

export default Project;
