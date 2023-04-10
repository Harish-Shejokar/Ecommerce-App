import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HomeContent = () => {
  return (
    <>
      <Container className="mb-5">
        <h1 className="text-center mb-4">Tours</h1>

        <Container className="">
          <Row  className="square border-bottom border-dark border-2 mb-2">
            <Col className="fs-4" sm={3}>
              JUL 16
            </Col>
            <Col className="fs-4" sm={3}>
              DETROIT, MI
            </Col>
            <Col className="fs-4" sm={4}>
              DTE ENERGY MUSIC THEATRE
            </Col>
            <Col>
              <Button className="px-5 mb-2" variant="info">
                Info
              </Button>{" "}
            </Col>
          </Row>
          <Row className="square border-bottom border-dark border-2 mb-2">
            <Col className="fs-4" sm={3}>
              JUL 16
            </Col>
            <Col className="fs-4" sm={3}>
              DETROIT, MI
            </Col>
            <Col className="fs-4" sm={4}>
              DTE ENERGY MUSIC THEATRE
            </Col>
            <Col>
              <Button variant="info">Info</Button>{" "}
            </Col>
          </Row>
          <Row className="square border-bottom border-dark border-2 mb-2">
            <Col className="fs-4" sm={3}>
              JUL 16
            </Col>
            <Col className="fs-4" sm={3}>
              DETROIT, MI
            </Col>
            <Col className="fs-4" sm={4}>
              DTE ENERGY MUSIC THEATRE
            </Col>
            <Col>
              <Button variant="info">Info</Button>{" "}
            </Col>
          </Row>
          <Row className="square border-bottom border-dark border-2 mb-2">
            <Col className="fs-4" sm={3}>
              JUL 16
            </Col>
            <Col className="fs-4" sm={3}>
              DETROIT, MI
            </Col>
            <Col className="fs-4" sm={4}>
              DTE ENERGY MUSIC THEATRE
            </Col>
            <Col>
              <Button variant="info">Info</Button>{" "}
            </Col>
          </Row>

          <Row className="square border-bottom border-dark border-2 mb-2">
            <Col className="fs-4" sm={3}>
              JUL 16
            </Col>
            <Col className="fs-4" sm={3}>
              DETROIT, MI
            </Col>
            <Col className="fs-4" sm={4}>
              DTE ENERGY MUSIC THEATRE
            </Col>
            <Col>
              <Button variant="info">Info</Button>{" "}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HomeContent;
