import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog from "../../../images/blog.jpg";
import BlogDetail from "./BlogDetail";

const RecentBlog = () => {
  const blogData = [
    {
      id: 1,
      name: "Blog are coming soon",
      category: "(Blog)",
      img: blog,
      live: "#",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid soluta magnam error aut eos odio vero ratione ea, mollitia deserunt nulla iste, magni quibusdam architecto sunt voluptates asperiores alias minima!",
    },
    {
      id: 2,
      name: "Blog are coming soon",
      category: "(Blog)",
      img: blog,
      live: "#",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid soluta magnam error aut eos odio vero ratione ea, mollitia deserunt nulla iste, magni quibusdam architecto sunt voluptates asperiores alias minima!",
    },
    {
      id: 3,
      name: "Blog are coming soon",
      category: "(Blog)",
      img: blog,
      live: "#",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid soluta magnam error aut eos odio vero ratione ea, mollitia deserunt nulla iste, magni quibusdam architecto sunt voluptates asperiores alias minima!",
    },
  ];
  return (
    <section data-aos="fade-left" className="mt-5 pt-5">
      <h1 className="text-center text-white pt-5">Recent Blogs</h1>
      <hr
        className="mb-md-5 mb-sm-3"
        style={{
          border: "0",
          borderBottom: "2px solid #FF4500",
          marginTop: "-3px",
        }}
      />
      <Row className="mb-5">
        {blogData.map((blog) => (
          <Col data-aos="zoom-in" key={blog.id} md={4}>
            <BlogDetail blog={blog} />
          </Col>
        ))}
      </Row>
      <Link to="/project">
        <Button style={{ width: "100%" }} variant="danger">
          View All Blogs
        </Button>
      </Link>
    </section>
  );
};

export default RecentBlog;
