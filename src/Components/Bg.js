import React,{useEffect, useState} from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
// import classes from "./Bg.module.css";
import PlayButton from "../Pages/HomePage/PlayButton";
import {useLocation} from 'react-router-dom'

const Bg = () => {
  const location = useLocation();
  const [playButton, setPlayButton] = useState(false);

  useEffect(() => {
    // console.log(location);
    if (location.pathname === "/home") setPlayButton(true);
    else setPlayButton(false);
  },[location])

  return (
    <Container fluid style={{ backgroundColor: "gray" }}>
      <Row>
        <Col xs={12} className="text-center mb-3">
          <h1 className="display-1" style={{color:'white'}}>The Generics</h1>
        </Col>

        {playButton && (
          <Col lg={12} className="text-center mb-3">
            <Button variant="outline-info" size="lg">
              Get our Latest Album
            </Button>
          </Col>
        )}
        {playButton && (
          <Col className="text-center mb-3">
            <PlayButton />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Bg;
