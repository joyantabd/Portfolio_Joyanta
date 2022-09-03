import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceImg from "../../Assets/experience.png";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ExperienceCard from "./ExperienceCard";


function ExperienceList() {


    return (
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Where I Have <strong className="purple">WORKED</strong>
              </h1>
              <ExperienceCard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={ExperienceImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

  
        </Container>
      </Container>
    );
}

export default ExperienceList;
