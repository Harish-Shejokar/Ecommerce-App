import React,{useState,useEffect} from 'react'
import {useLocation,NavLink,} from 'react-router-dom';
import {
  Navbar,
  Container,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import Cart from './Cart/Cart';
import Bg from "./Bg";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import Footer from "../Components/Footer";


const NavBar = () => {
  const [store, setIsStore] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  const location = useLocation();
  useEffect(() => {
   
    // console.log(location)
    if (location.pathname === '/store') setIsStore(true);
    else setIsStore(false);

    if (location.pathname === '/productDetails/') setIsProduct(true);
    else setIsProduct(false);

  }, [location]);
  
  return (
    <>
      <Navbar className="sticky-top " bg="black" expand="md" variant="dark">
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
              to="/store"
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
          <Navbar.Brand className="mx-4">
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "white",
              })}
            >
              CONTACT
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="mx-4">
            <NavLink
              to="/product"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "white",
              })}
            >
              <Dropdown as={ButtonGroup}>
                <Button variant="success">Product</Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/product?category=electronics&brand=boat">Electronics</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/product?category=mobiles&brand=OnePLus">Mobiles</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </NavLink>
          </Navbar.Brand>
        </Container>
        {store && (
          <Cart
            className=""
            title={"CART"}
            variant="outline-info"
            navbar="true"
          />
        )}
      </Navbar>

      <main style={{ backgroundColor: "rgb(255,255,255)" }}>
        {!isProduct && <Bg />}

        {/* <Footer /> */}
      </main>
    </>
  );
}

export default NavBar
