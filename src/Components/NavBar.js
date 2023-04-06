import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import Cart from './Cart/Cart';


const NavBar = () => {
  const [store, isStore] = useState(false);

  const location = useLocation();
  useEffect(() => {
    // console.log(location)
    // console.log(store)
    if(location.pathname === '/') isStore(true);
  }, [location]);
  
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
      {store && <Cart className="mx-3" title={"CART"} variant="outline-info" />}
    </Navbar>
  );
}

export default NavBar
