import React,{useContext} from "react";
import { Card, Button, Container } from "react-bootstrap";
import CartContext from "../../Store/Cart-Context";

const Box = (props) => {
  const crtx = useContext(CartContext);
  const buttonHandler = (e) => {
    // console.log(props.data)
    crtx.addItemToCart({ ...props.data,quantity:1 });
  };


  return (
    <Container className=" d-flex justify-content-center">
      <Card style={{ width: "15rem", border:'none'}}>
        <Card.Img className="img-zoom-container" variant="top" src={props.url} />
        <Card.Body></Card.Body>

        <div className="d-flex justify-content-between ">
          <div>${props.price}</div>
          <Button type="button" onClick={buttonHandler} variant="info">
            <strong className="mt-2 text-white">ADD TO CART</strong>
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Box;
