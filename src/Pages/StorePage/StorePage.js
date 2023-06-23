import React, { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
// import Bg from '../Components/Bg';
// import NavBar from "../Components/NavBar";
// import Footer from "../Components/Footer";
import Cart from "../../Components/Cart/Cart";
import CartProvider from "../../Store/CartCtx/CartProvider";
const MusicSection = lazy(() => import("../../Components/Album/MusicSection"));

const Home = () => {
  return (
    <>
      {/* <h2 className="text-center mt-4">Items</h2> */}
      <Suspense fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
        <MusicSection />
      </Suspense>

      <Container className="mb-5 d-flex justify-content-center">
        <Cart title={"See the Cart"} variant="info" />
      </Container>
    </>
  );
};

export default Home;
