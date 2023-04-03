import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Bg from "./Components/Bg";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MusicSection from "./Components/Album/MusicSection";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [cartShown, setCartShown] = useState(true);

  const cartShownHandler = () => {
    setCartShown(true);
  }


  return (
    <>
      <NavBar />
      <main>
        <Bg />
        <section>
          <h2 className="text-center mt-4">Music</h2>
          <MusicSection />
        </section>
      </main>

      <Container className="mb-5 d-flex justify-content-center">
        <Cart title={'See the Cart'} />
        {/* <Button onClick={cartShownHandler} className="p-2" variant="secondary">
          <strong>See the Cart</strong>
        </Button> */}
      </Container>
      <Footer />
    </>
  );
};

export default App;
