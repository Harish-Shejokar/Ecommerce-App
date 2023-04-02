import React from 'react'
import {Navbar,Container,Button } from 'react-bootstrap';

const NavBar = () => {
    const cartHandler = () => {
        console.log('hey')
    }
  return (
    
      <Navbar className='sticky-top' bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Navbar.Brand href="#STORE">STORE</Navbar.Brand>
          <Navbar.Brand href="#ABOUT">ABOUT</Navbar.Brand>
          <Button onClick={cartHandler} variant="outline-info">
            CART
          </Button>{" "}
        </Container>
      </Navbar>
    
  );
}

export default NavBar
