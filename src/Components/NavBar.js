import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';
import Cart from './Cart/Cart';

const NavBar = () => {
    const cartHandler = () => {
        console.log('hey')
    }
  return (
    <Navbar className="sticky-top " bg="black" expand="lg" variant="dark">
      <Container className="d-flex justify-content-center ">
        <Navbar.Brand className="mx-4" href="#home">
          HOME
        </Navbar.Brand>
        <Navbar.Brand className="mx-4" href="#STORE">
          STORE
        </Navbar.Brand>
        <Navbar.Brand className="mx-4" href="#ABOUT">
          ABOUT
        </Navbar.Brand>
      </Container>
      <Cart className="mx-3" title={"CART"} variant="outline-info" />
    </Navbar>
  );
}

export default NavBar
