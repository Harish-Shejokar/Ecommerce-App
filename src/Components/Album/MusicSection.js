import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "../Card/Box";

const MusicSection = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <Container >
      <Row className="d-flex  justify-content-between mb-5">
        {productsArr.map((item, index) => {
          return (
            <Col sm={6} className="mb-3 " key={item.title}>
              <h4 className="text-center">Album {index + 1}</h4>
              <Box
                data={{ ...item }}
                title={item.title}
                price={item.price}
                url={item.imageUrl}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MusicSection;
