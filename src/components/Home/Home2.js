import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            You probably want to stalk me online.<br></br> I'll just give it to you. 
            </h1>
            <p className="home-about-body">
              I just did a few things and now I program for a living &nbsp; 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <b className="purple"> Python, C++ and Java. </b> I'm currently learning Swift and Go in my spare time. 
              <br />
              <br />
              I'm primarily focused on web dev, but I'm fluent in across the tech stack. &nbsp;
                {}
              My most recent internship at <a href="https://statefarm.com"><b className="sf">State Farm</b></a> was working with Angular TypeScript and JavaScript
              <br />
              <br />
              Whenever possible, I also apply my knowledge in hackathons @ <b className="tamu">TAMU</b>, <b className="ut"> UT Austin</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">

            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashang1524"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashang1524/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashang1524/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
