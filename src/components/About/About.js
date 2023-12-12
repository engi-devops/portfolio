import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
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
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} className="home-about-description2" style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
            <h1 className="project-heading" style={{ paddingBottom: "5px" }}>
              <strong className="purple">Skills</strong>
            </h1>
            <p className="home-about-body">
              Node.js | Nest.js:
              <br />
              Expertise in developing efficient server-side applications.
            </p>

            <p className="home-about-body">
              AWS | AwsLambda | SQS | SNS:
              <br />
              Proficient in leveraging Amazon Web Services for scalable solutions.
            </p>

            <p className="home-about-body">
              Express.js:
              <br />
              Proficient in building RESTful APIs for seamless communication.
            </p>

            <p className="home-about-body">
              Databases:
              <br />
              Management of MongoDB, PostgreSQL, and MySQL databases.
            </p>

            <p className="home-about-body">
              Typescript:
              <br />
              Utilizing TypeScript to write robust and maintainable code.
            </p>

            <p className="home-about-body">
              Git Platforms:
              <br />
              Proficient in version control systems like GitHub, Bit Bucket, GitLab.
            </p>

            <p className="home-about-body">
              Containerization:
              <br />
              Experience with Docker for efficient application containerization.
            </p>

            <p className="home-about-body">
              Project Management:
              <br />
              Efficient use of tools like Trello and Jira for project organization.
            </p>

            <p className="home-about-body">
              Development Environments:
              <br />
              Familiarity with VS Code and other development tools.
            </p>

            <p className="home-about-body">
              AWS Services:
              <br />
              Handling AWS resources, such as EC2 instances and S3 buckets.
            </p>

            <p className="home-about-body">
              Operating Systems:
              <br />
              Proficient in Mac and Linux environments.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
