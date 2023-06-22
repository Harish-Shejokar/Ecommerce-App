import React,{useEffect, useState} from "react";
import { Button, Container, Row, Col,Carousel } from "react-bootstrap";
// import classes from "./Bg.module.css";
import PlayButton from "../Pages/HomePage/PlayButton";
import {useLocation} from 'react-router-dom'

const Bg = () => {
  const location = useLocation();
  const [playButton, setPlayButton] = useState(false);
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex) => {
     setIndex(selectedIndex);
   };


  useEffect(() => {
    // console.log(location);
    if (location.pathname === "/home") setPlayButton(true);
    else setPlayButton(false);
  },[location])

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            height={400}
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/composition-black-friday-shopping-cart-with-copy-space_23-2148667046.jpg?w=1380&t=st=1686844278~exp=1686844878~hmac=5c1bb8565fcbd2e72bedbbe6466626d6601ea90c5cecaa2c88e8c09a0d8e7a8a"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={400}
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=1380&t=st=1686844337~exp=1686844937~hmac=a0220d5840acf175cd424aa4ca05431044b247960a5c18c38f871da3149b1cb5"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={400}
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/super-sale-phone-banner-mobile-clearance-sale-discount-poster-smartphone-sale-marketing-special-offer-promotion_433751-53.jpg?w=996&t=st=1686844428~exp=1686845028~hmac=0af4c982173c2f5e5c8af3d790f6a037f3a3fa7e778a35a48cf623b9f06237a7"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      ); 
    </>
    // <Container fluid style={{ backgroundColor: "gray" }}>
    //   <Row>
    //     <Col xs={12} className="text-center mb-3">
    //       <h1 className="display-1" style={{color:'white'}}>The Generics</h1>
    //     </Col>

    //     {playButton && (
    //       <Col lg={12} className="text-center mb-3">
    //         <Button variant="outline-info" size="lg">
    //           Get our Latest Album
    //         </Button>
    //       </Col>
    //     )}
    //     {playButton && (
    //       <Col className="text-center mb-3">
    //         <PlayButton />
    //       </Col>
    //     )}
    //   </Row>
    // </Container>
  );
};

export default Bg;
