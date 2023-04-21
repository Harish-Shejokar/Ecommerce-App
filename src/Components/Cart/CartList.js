import React, { useContext, useEffect } from "react";
import { Container, ListGroup, Col, Row, Button, Badge } from "react-bootstrap";
import ImgBox from "./ImgBox";
import CartContext from "../../Store/Cart-Context";
import CreateAuthCtx from "../../Store/AuthCtx/Auth-Context";

const CartList =  () => {
  const cartCtx = useContext(CartContext);
  const AuthCtx = useContext(CreateAuthCtx);
  // console.log(email);
  
  // useEffect(() => {
    
  //   // console.log(dataFromBackEnd)
  // });

  const removeHandler = (e) => {
    console.log(e.target.id);
    cartCtx.removeItemCart(e.target.id);
  };

  
  return (
    <ListGroup>
      {cartCtx.cartItems.map((item, index) => {
        return (
          <ListGroup.Item key={Math.random()}>
            <Container className="d-flex justify-content-between">
              <Row>
                <Col>
                  <ImgBox img={item.imageUrl} />
                </Col>
                <Col className="">Album{index + 1}</Col>
                <Col>{item.price}</Col>

                <Col>
                  <Badge bg="info">{item.quantity}</Badge>
                </Col>
                <Col>
                  <Button
                    type="button"
                    id={item.title}
                    onClick={removeHandler}
                    variant="danger"
                  >
                    REMOVE
                  </Button>
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
