import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coderconnect from "../../Assets/Projects/coderconnect.jpg";
import rizztech from "../../Assets/Projects/rizztech.jpg";
import smallbites from "../../Assets/Projects/smallbites.jpg";
import cnn from "../../Assets/Projects/cnn.gif";
// import optimum from "../../Assets/Projects/";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">Recent Projects</h1>
        <p style={{ color: "white" }}>A few projects I did in the past</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={coderconnect}
              isBlog={false}
              title="Optimum"
              description="Optimum enables everyday users to rent out their computers, similarly to how big cloud providers do so. This is done through Optimum’s marketplace, where sellers post their computer specs and listing price per time interval, and potential buyers bid for those resources."
              ghLink="https://devpost.com/software/optimum"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coderconnect}
              isBlog={false}
              title="CoderConnect"
              description="A collaborative coding environment in which students can seek one on one free tutoring services, with video and messaging capabilities all built in one."
              ghLink="https://github.com/satyasuravaram/coderconnect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rizztech}
              isBlog={false}
              title="rizz.tech"
              description="A fun hackathon challenge where users can upload message history. A natural language processing model will return texting statistics, analyze overall sentiment, and generate more messages. All to help that rizz game."
              ghLink="https://github.com/simonxiang1/messaging_help"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnn}
              isBlog={false}
              title="cagi6"
              description="A convolutional neural network using multi-task and multi-learning learning techniques to predict embedded representations of protein sequences. Currently in progress."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smallbites}
              isBlog={false}
              title="Small Bites"
              description="A web application which provides a search engine for locally owned small businesses and restaurant locations. Uses data provided from the Google Maps and Yelp Fusion API."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
