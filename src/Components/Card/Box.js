import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const Box = (props) => {
  return (
    <Container className=" d-flex justify-content-center">
      <Card style={{ width: "15rem", border:'none'}}>
        <Card.Img className="img-zoom-container" variant="top" src={props.url} />
        <Card.Body>
          {/* <Card.Title>{props.title}</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <div className="d-flex justify-content-between ">
          <div>${props.price}</div>
          <Button variant="info">
            <strong className="mt-2 text-white">ADD TO CART</strong>
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Box;
