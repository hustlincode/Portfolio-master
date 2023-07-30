import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fidel Jon Magat </span>
            from <span className="purple"> Angeles City, Pampanga.</span>
            <br /> I am a final year student pursuing an Bachelor of Science in Information Technology (BSIT)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Kdramas
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "DON'T STOP when you're tired, STOP when you're DONE"{" "}
          </p>
          <footer className="blockquote-footer">Fideljon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
