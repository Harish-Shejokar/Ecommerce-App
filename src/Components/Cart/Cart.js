import { Offcanvas, Container, Col, Row, Button, Badge } from "react-bootstrap";
import React, { useContext, useState } from "react";
import CartList from "./CartList";
import CartContext from "../../Store/CartCtx/Cart-Context";
import CreateAuthCtx from "../../Store/AuthCtx/Auth-Context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const AuthCtx = useContext(CreateAuthCtx);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // cartCtx.getCartItemsFromFirebase();
  };
  // console.log(props);
  return (
    <>
      <Button variant={props.variant} onClick={handleShow} className="me-2">
        {props.title}

        <Badge className="mx-2" bg="danger">
          {cartCtx.quantity}
        </Badge>
      </Button>
      <Offcanvas
        style={{ width: "27rem" }}
        className=""
        placement="end"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>CART</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartList />
          <Container fluid className="d-flex justify-content-around my-3">
            <Row>
              <Col>
                <h3>Total Amount</h3>
              </Col>
              <Col>
                <h3>${cartCtx.totalAmount}</h3>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
