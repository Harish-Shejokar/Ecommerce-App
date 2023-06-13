import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "../Card/Box";
import axios, { all } from "axios";

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

  const [allData, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );

      const data = await response.data;

      setData(data.slice(0, 15));
      console.log(allData);
      allData.map((item) => {
        console.log(item);
        console.log(item.title, item.price, item.images[0]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fluid>
      <Row className="mx-2">
        {allData.map((item, index) => {
          let obj = {
            title: item.title,
            price: item.price,
            imageUrl: item.images[0],
          };

          return (
            <Col className=" mb-5 " key={item.title}>
              <h4 className="text-center">{item.title}</h4>
              <Box
                data={{ ...obj }}
                title={item.title}
                price={item.price}
                url={item.images[0]}
                images ={item.images}
              />
              {/* {console.log(item)} */}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MusicSection;
