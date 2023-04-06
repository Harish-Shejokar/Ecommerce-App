
import {
  Modal,
  Container,
  Col,
  Row,
  Button,
  Badge,
} from "react-bootstrap";
import React,{useContext,useState} from "react";
import CartList from "./CartList";
import CartContext from "../../Store/Cart-Context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
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
        {props.title}<Badge className="ms-2" bg="info">{cartCtx.quantity}</Badge>
      </Button>

      <Modal tabindex="-1" show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className="">CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid className="d-flex justify-content-between">
            <Row>
              <Col lg={3}>
                <h4>ITEMS</h4>
              </Col>

              <Col lg={3}>
                <h4>PRICE</h4>
              </Col>
              <Col lg={3}>
                <h4>QUANTITY</h4>
              </Col>
            </Row>
          </Container>
          <Container fluid>
                      <CartList />
          </Container>

          <Modal.Footer>
            <strong>Total ${cartCtx.totalAmount}</strong>
          </Modal.Footer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
