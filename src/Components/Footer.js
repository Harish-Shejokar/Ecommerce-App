import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import youtube from "../assets/youtubeLogo.png";
import fb from "../assets/fb.png";
import spotify from "../assets/spotImg.jfif";

const Footer = () => {
  return (
    <footer>
      <Navbar
        sticky="bottom"
        className="py-3"
        bg="info"
        expand="lg"
        variant="light"
      >
        <Container className="d-flex justify-content-between ">
          <Row>
            <Col>
              <h2 className="text-white">e-Store</h2>
            </Col>
          </Row>
          <Row sm={4} className=" ">
            <Col>
              <Navbar.Brand
                className="mx-2"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <img
                  src={youtube}
                  alt="loading"
                  width={"30px"}
                  height={"30px"}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand
                className="mx-2 "
                href="https://open.spotify.com/?"
                target="_blank"
              >
                <img
                  src={spotify}
                  alt="loading"
                  width={"33px"}
                  height={"30px"}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand
                className="mx-2"
                href="https://www.youtube.com/"
                target="_blank"
              >
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
