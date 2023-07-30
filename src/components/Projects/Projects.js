import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import slfreemed from "../../Assets/Projects/slfreemed.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's the recent projects I've worked on recently and ongoing development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slfreemed}
              isBlog={false}
              title="SLFreemed | Medicine Inventory"
              description="School Project Capstone a Inventory System to manage the stocks of medicines in libreng gamot program in 
              SanLuis Municipal we build this with html/css/js/php, and MySQL Xampp. Have features which allows user/admins for managing the stocks, 
              managing the records of receiver of the medicines, qr prescriptions, generation of reports and etc.."
              ghLink="https://github.com/hustlincode/Capstone_Arc2-main"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
