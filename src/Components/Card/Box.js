import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Container, Button, Spinner } from "react-bootstrap";
import CartContext from "../../Store/CartCtx/Cart-Context";
import CreateAuthCtx from "../../Store/AuthCtx/Auth-Context";

const Box = (props) => {
  const crtx = useContext(CartContext);
  const AuthCtx = useContext(CreateAuthCtx);
  const [disable, setDisable] = useState(false);
  const email = AuthCtx.userEmail.replace(/[^a-z0-9 -]/gi, "");

  const buttonHandler = () => {
    // console.log(props.data)
    setDisable(true);
    crtx.addItemToCart({ ...props.data, quantity: 1 });
    setInterval(() => setDisable(false), 1000);
  };

  const obj = {
    price: props.price,
    title: props.title,
    url: [
      props.url,
      props.images[1],
      props.images[2],
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      // "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      // "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ],
  };
  return (
    <>
      <Container className="d-flex justify-content-center shadow-sm">
        <Card style={{ width: "18rem", border: "none" }}>
          <Link
            to={{
              // pathname: `/productDetails/${props.title}`,
              pathname: `/productDetails`,
              state: obj,
            }}
          >
            <Card.Img
              className="img-zoom-container"
              variant="top"
              src={props.url}
            />
          </Link>

          <Card.Body></Card.Body>

          <div className="d-flex justify-content-between ">
            <div>${props.price}</div>
            {disable ? (
              <Spinner animation="border" variant="dark" size="lg" />
            ) : (
              <Button type="button" onClick={buttonHandler} variant="info">
                <strong className="mt-2 text-white">ADD TO CART</strong>
              </Button>
            )}
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Box;
