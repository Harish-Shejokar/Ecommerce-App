import React from "react";
import { Container, ListGroup,Col,Row,Button,Badge} from "react-bootstrap";

const CartList = () => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
    <ListGroup>
          {cartElements.map((item,index) => {
          return (
            <ListGroup.Item>
              <Container className="d-flex justify-content-between">
                      <Row>
                          <Col>{item.imageUrl}</Col>
                  <Col className="">Album{index+1}</Col>
                  <Col>{item.price}</Col>
                  <Col>{item.quantity}</Col>
                  <Col>
                    <Badge bg="secondary">New</Badge>
                  </Col>
                  <Col>
                    <Button variant="info">Remove</Button>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          );
      })}
    </ListGroup>
  );
};

export default CartList;
