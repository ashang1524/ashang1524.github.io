import React from "react";
import Card from "react-bootstrap/Card";
import { ImCloudCheck } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi internet stranger, I'm <span className="purple">Andrew Shang. </span>
            <br />I am a senior majoring in Computer Science with a Math minor at Texas A&M University
            <br />
            <br />
            I try to go out and touch grass. Sometimes...
          </p>
          <ul>
            <li className="about-activity">
              <ImCloudCheck /> Gaming (Valorant, Overwatch)
            </li>
            <li className="about-activity">
              <ImCloudCheck /> Bouldering (currently on v7)
            </li>
            <li className="about-activity">
              <ImCloudCheck /> Concerts, anywhere
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you're lying to me, I'll make you eat pocky through your nose."{" "}
          </p>
          <footer className="blockquote-footer">Mai Sakurajima</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
