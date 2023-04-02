import React from "react";
import {  Container, ListGroup } from "react-bootstrap";
import Box from '../Card/Box';
import Album1 from '../../assets/Album1.png';

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
      <ListGroup className="lg d-flex flex-row mx-1 mt-5">
        {productsArr.map((item) => {
          return (
            <Container>
                  <Box title={item.title} price={item.price} url={item.imageUrl} />
            </Container>
          );
        })}
      </ListGroup>
    );
};

export default MusicSection;
