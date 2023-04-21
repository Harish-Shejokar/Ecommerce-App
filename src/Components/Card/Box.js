import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import CartContext from "../../Store/Cart-Context";
import CreateAuthCtx from "../../Store/AuthCtx/Auth-Context";
// import ProductDetailsPage from "../../Pages/StorePage/ProductDetail/ProductDetailsPage";

const Box = (props) => {
  const crtx = useContext(CartContext);
  const AuthCtx = useContext(CreateAuthCtx);
  
  const email = AuthCtx.userEmail.replace(/[^a-z0-9 -]/gi, "");
  const buttonHandler = async (e) => {
    crtx.addItemToCart({ ...props.data, quantity: 1 });
    let dataFromBackEnd;
    async function getDataFromBackend() {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/f5c90e0e86c543c89117a00514de843f/${email}`
        );

        if (response.ok) {
          const data = await response.json();
          dataFromBackEnd = data;
          // dataFromBackEnd.map((item) => console.log(item.cartItems));
          // console.log(dataFromBackEnd)
          if (dataFromBackEnd.length > 0) crtx.BackEndData(dataFromBackEnd);
        } else {
          console.log("get not ok");
        }
      } catch (err) {
        console.log(err);
      }
    }
    getDataFromBackend();
   
  };

  const productHandler = () => { };
  const obj = {
    price: props.price,
    title: props.title,
    url: [
      props.url,
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ],
  };
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Card style={{ width: "15rem", border: "none" }}>
          <Link
            to={{
              pathname: `/productDetails/${props.title}`,
              state: obj,
            }}
          >
            <Card.Img
              onClick={productHandler}
              className="img-zoom-container"
              variant="top"
              src={props.url}
            />
          </Link>

          <Card.Body></Card.Body>

          <div className="d-flex justify-content-between ">
            <div>${props.price}</div>
            <Button type="button" onClick={buttonHandler} variant="info">
              <strong className="mt-2 text-white">ADD TO CART</strong>
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Box;
