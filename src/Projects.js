import React from "react";
import { Card, Carousel, Col, Image, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <center>
            <Row>
              <Col>
             
              </Col>
            </Row>
          </center>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <center>
            <Row>
              <Col>
              
              </Col>
            </Row>
          </center>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <center>
            <Row>
              <Col>
             
              </Col>
            </Row>
          </center>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Projects;
