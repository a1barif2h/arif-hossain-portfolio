import React from "react";
import { Button, Card } from "react-bootstrap";

const BlogDetail = ({ blog }) => {
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
          src={blog.img}
        />
        <Card.Body style={{ backgroundColor: "#343A40" }}>
          <div style={{ height: "200px" }}>
            <Card.Title style={{ color: "#FFD700" }}> {blog.name} </Card.Title>
            <Card.Text style={{ color: "#ADFF2F" }}>{blog.category}</Card.Text>
            <Card.Text className="text-white">{blog.description}</Card.Text>
          </div>
          {/* <a
            style={{ display: "block" }}
            target="_blank"
            rel="noreferrer"
            href={blog.live}
          > */}
          <Button style={{ width: "100%" }} variant="primary">
            Read More
          </Button>
          {/* </a> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetail;
