import { Offcanvas, Container, Col, Row, Button, Badge } from "react-bootstrap";
import React, { useContext, useState } from "react";
import CartList from "./CartList";
import CartContext from "../../Store/Cart-Context";
// import { createContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow} className="me-2">
        {props.title}
        {true && (
          <Badge className="mx-2" bg="info">
            {cartCtx.quantity}
          </Badge>
        )}
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
