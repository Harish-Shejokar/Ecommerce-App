import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import youtube from "../assets/youtubeLogo.png";
import fb from "../assets/fb.png";
import spotify from "../assets/spotImg.jfif";

const Footer = () => {
  return (
    <footer>
      <Navbar className="py-3" bg="info" expand="lg" variant="dark">
        <Container>
          <Row>
            <h1 className="text-white">The Generics</h1>
          </Row>
          <Row>
            <Col>
              <Navbar.Brand className="mx-2" href="#home">
                <img
                  src={youtube}
                  alt="loading"
                  width={"30px"}
                  height={"30px"}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand className="mx-2 " href="#STORE">
                <img
                  src={spotify}
                  alt="loading"
                  width={"33px"}
                  height={"30px"}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand className="mx-2" href="#ABOUT">
                <img src={fb} alt="loading" width={"30px"} height={"30px"} />
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
