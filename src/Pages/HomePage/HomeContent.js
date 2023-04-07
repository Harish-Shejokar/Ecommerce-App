import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const HomeContent = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center">Tours</h1>

          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col className="" sm={3}>
                  JUL 16
                </Col>
                <Col sm={3}>DETROIT, MI</Col>
                <Col sm={3}>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button className="px-5" variant="info">
                    Info
                  </Button>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row syle={{ marginBottom: "1px-solid-black" }}>
                <Col sm={3}>JUL 16</Col>
                <Col sm={3}>DETROIT, MI</Col>
                <Col sm={3}>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">Info</Button>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col sm={3}>JUL 16</Col>
                <Col sm={3}>DETROIT, MI</Col>
                <Col sm={3}>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">Info</Button>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col sm={3}>JUL 16</Col>
                <Col sm={3}>DETROIT, MI</Col>
                <Col sm={3}>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">Info</Button>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col sm={3}>JUL 16</Col>
                <Col sm={3}>DETROIT, MI</Col>
                <Col sm={3}>DTE ENERGY MUSIC THEATRE</Col>
                <Col>
                  <Button variant="info">Info</Button>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </>
  );
};

export default HomeContent;
