import React from "react";
import { Container } from "react-bootstrap";
import Main from "../Main/Main";
import RecentProject from "../RecentProject/RecentProject";

const Home = () => {
  return (
    <Container className="pt-5">
      <Main />
      <RecentProject />
    </Container>
  );
};

export default Home;
