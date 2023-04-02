import React from "react";
import { Button, Container } from "react-bootstrap";
import Bg from "./Components/Bg";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MusicSection from "./Components/Album/MusicSection";

const App = () => {
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
        <Button className="p-2" variant="secondary">
          <strong>See the Cart</strong>
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default App;
