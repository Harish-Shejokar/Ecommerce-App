import React,{useState,useEffect} from 'react'
import {useLocation,NavLink,Outlet} from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import Cart from './Cart/Cart';
import Bg from "./Bg";
// import Footer from "../Components/Footer";


const NavBar = () => {
  const [store, setIsStore] = useState(false);

  const location = useLocation();
  useEffect(() => {
   
    // console.log(location)
    if (location.pathname === '/') setIsStore(true);
    else setIsStore(false);
  }, [location]);
  
  return (
    <>
      <Navbar className="sticky-top " bg="black" expand="lg" variant="dark">
        <Container className="d-flex justify-content-center ">
          <Navbar.Brand className="mx-4">
            <NavLink
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              HOME
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="mx-4">
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              STORE
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="mx-4">
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "white",
              })}
            >
              ABOUT
            </NavLink>
          </Navbar.Brand>
        </Container>
        {store && (
          <Cart className="mx-3" title={"CART"} variant="outline-info" />
        )}
      </Navbar>

      <main style={{ backgroundColor: "rgb(255,255,255)" }}>
        <Bg />
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default NavBar
