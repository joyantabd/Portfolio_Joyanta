import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Joyanta Kumer Sarker </span>
            from <span className="purple"> Gaibandha, Bangladesh.</span>
            <br />I have completed by Bs'c from IUBAT-International University of Business Agriculture and Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Science-fiction Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do you job wisely and be Happy!!!"{" "}
          </p>
          <footer className="blockquote-footer">Joyanta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
