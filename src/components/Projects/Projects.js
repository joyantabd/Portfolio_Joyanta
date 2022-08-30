import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tic from "../../Assets/Projects/tic.png";
import watch from "../../Assets/Projects/watch.png";
import editor from "../../Assets/Projects/codeEditor.png";
import smsbangladesh from "../../Assets/Projects/smsbangladesh.png";
import beach from "../../Assets/Projects/beach.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import quiz from "../../Assets/Projects/quiz.png";
import calculator from "../../Assets/Projects/calculator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smsbangladesh}
              isBlog={false}
              title="SMSBangladesh"
              description="Professional SMS Communication with SMS Bangladesh. SMSbangladesh is a commercial and live Project of NajjTechnologied Ltd.Build with Laravel and Javascript with RestAPI from different Operator like(GremeenPhone,Airtel,Banglalink,Teletalk,Mirtel). Have features which allows user for realtime messaging, professional messaging as well as supports Dynamic messging."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://smsbangladesh.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic Tac Toe"
              description="Simple React Game named after Tic Tac Toe. This was made with React.js"
              ghLink="https://github.com/joyantabd/Tic-Tac-Game"
              demoLink="https://joyanta-tic-tac-toe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beach}
              isBlog={false}
              title="Beach Resort"
              description="Beach Resport is a Demo Project that was made with React.js. By this project you can search rooms inside a resort,ther rent,size, how many perople can stay. So please click the demo link you will get it in front of you. "
              ghLink="https://github.com/joyantabd/Resort"
              demoLink="https://joyanta-react-resort.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watch}
              isBlog={false}
              title="Stop Watch"
              description=""
              ghLink="https://github.com/joyantabd/Joyanta-Stopwatch"
              demoLink="https://joyantastopwatch.netlify.app/"
            />
          </Col>
        </Row>
        <Row>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Simple Quiz App"
              description="Simple React Quiz App. You can select the option and it will vanishes rest of the option ,after submitting answers it will show how many answer you clicked and whether it is right or wrong"
              ghLink="https://github.com/joyantabd/Quiz-App"
              demoLink="https://joyantaquizapp.netlify.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Simple Javascript Calculator"
              description="Simple Raw Javascript Calculator App. You can do what ever calculation you want from a simple calculator. It was made with raw javascript."
              ghLink="https://github.com/joyantabd/Simple-Calculator"
              demoLink="https://joyantabd.github.io/Simple-Calculator/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
