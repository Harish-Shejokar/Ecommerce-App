import React, {} from "react";
import {  Container } from "react-bootstrap";
// import Bg from '../Components/Bg';
// import NavBar from "../Components/NavBar";
// import Footer from "../Components/Footer";
import MusicSection from "../../Components/Album/MusicSection";
import Cart from "../../Components/Cart/Cart";
import CartProvider from "../../Store/CartProvider";

const Home = () => {
  return (
    <>
      
        {/* <NavBar /> */}
        {/* <main> */}
      {/* <section> */}
      
            <h2 className="text-center mt-4">Items</h2>
            {/* <MusicSection /> */}
          {/* </section> */}
        {/* </main> */}

        <Container className="mb-5 d-flex justify-content-center">
          <Cart title={"See the Cart"} variant="info" />
        </Container>
      
    </>
  );
}

export default Home
