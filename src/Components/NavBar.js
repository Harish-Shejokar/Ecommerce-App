import React, { useState, useEffect, useContext } from "react";
import { useLocation, NavLink, useHistory, useParams } from "react-router-dom";
import {
  Navbar,
  Container,
  Button,
  FormControl,
  Row,
  Col,
  NavDropdown,
  Nav,
  Form,
} from "react-bootstrap";
import Cart from "./Cart/Cart";
import Bg from "./Bg";
import CreateAuthCtx from "../Store/AuthCtx/Auth-Context";
// import Footer from "../Components/Footer";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const AuthCtx = useContext(CreateAuthCtx);
  const [store, setIsStore] = useState(false);
  const [isProduct, setIsProduct] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { title } = useParams();

  // console.group(title);

  useEffect(() => {
    // console.log(location)
    if (location.pathname === "/store") setIsStore(true);
    else setIsStore(false);

    if (location.pathname === `/productDetails`) setIsProduct(true);
    else setIsProduct(false);
  }, [location]);

  const logoutButton = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    history.replace("/login");
    AuthCtx.logInOut();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className={classes.logo}>
            e-STORE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={`${classes.navLinks} `}>
                HOME
              </NavLink>
              <NavLink to="/store" className={`${classes.navLinks} `}>
                STORE
              </NavLink>
              <NavLink to="/about" className={`${classes.navLinks} `}>
                ABOUT
              </NavLink>
              <NavLink to="/contact" className={`${classes.navLinks} `}>
                CONTACT
              </NavLink>

              {AuthCtx.isLoggedIn && (
                <Button
                  className="my-1 ms-2"
                  variant="light"
                  onClick={logoutButton}
                >
                  LOGOUT
                </Button>
              )}
            </Nav>
            {/* <Nav className="searchBar"> 
              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className=""
                />
              </Form>
              <Button className="ms-2" variant="outline-success">
                Search
              </Button>
            </Nav> */}
            <Nav className="align-right cartBucket">
              {AuthCtx.isLoggedIn && (store || isProduct) && (
                <Cart title={"CART"} variant="outline-info" />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {location.pathname !== `/productDetails` &&
        location.pathname !== "/contact" && <Bg />}
    </>
  );
};

export default NavBar;
