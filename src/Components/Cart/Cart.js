import React, { useState } from "react";
import {
  Modal,
  Container,
  Col,
  Row,
  Button,
  Table,
  Badge,
} from "react-bootstrap";
import CartList from "./CartList";

const Cart = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className={props.className}
        variant={props.variant}
        onClick={handleShow}
      >
        {props.title}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className=""></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid className="d-flex justify-content-between">
            <Row>
              <Col>ITEMS</Col>
              <Col>PRICE</Col>
              <Col>QUANTITY</Col>
            </Row>
          </Container>
          <Container fluid>
            <CartList />
          </Container>

          <Modal.Footer>
            <strong>Total ${0}</strong>
          </Modal.Footer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // <Modal {...cartElements[0]} aria-labelledby="contained-modal-title-vright">
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       Using Grid in Modal
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body className="show-grid">
    //     <Container>
    //       <Row>
    //         <Col xs={12} md={8}>
    //           .col-xs-12 .col-md-8
    //         </Col>
    //         <Col xs={6} md={4}>
    //           .col-xs-6 .col-md-4
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col xs={6} md={4}>
    //           .col-xs-6 .col-md-4
    //         </Col>
    //         <Col xs={6} md={4}>
    //           .col-xs-6 .col-md-4
    //         </Col>
    //         <Col xs={6} md={4}>
    //           .col-xs-6 .col-md-4
    //         </Col>
    //       </Row>
    //     </Container>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button onClick={props.onHide}>Close</Button>
    //   </Modal.Footer>
    // </Modal>
  );
};

export default Cart;
