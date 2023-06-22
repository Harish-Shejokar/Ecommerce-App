import React, { useState, useEffect, useContext } from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import { Navbar, Container, Button, FormControl,Row,Col,NavDropdown,Nav,Form } from "react-bootstrap";
import Cart from "./Cart/Cart";
import Bg from "./Bg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CreateAuthCtx from "../Store/AuthCtx/Auth-Context";
// import Footer from "../Components/Footer";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const AuthCtx = useContext(CreateAuthCtx);
  const [store, setIsStore] = useState(false);
  const [isProduct, setIsProduct] = useState(false);
  const history = useHistory();

  const location = useLocation();
  // console.log(location);
  useEffect(() => {
    // console.log(location)
    if (location.pathname === "/store") setIsStore(true);
    else setIsStore(false);

    if (location.pathname === "/productDetails/") setIsProduct(true);
    else setIsProduct(false);
  }, [location]);

  const logoutButton = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    history.replace("/login");
    AuthCtx.logInOut();
    // window.location.reload(false);
  };

  return (
    <>
      <Navbar className={classes.navbar} bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className={classes.logo}>
            e-STORE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/home" className={classes.navLinks}>
                HOME
              </NavLink>
              <NavLink
                to="/store"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                className={classes.navLinks}
              >
                STORE
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: "white",
                })}
                className={classes.navLinks}
              >
                ABOUT
              </NavLink>
              <NavLink to="/contact" className={classes.navLinks}>
                CONTACT
              </NavLink>
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
              {AuthCtx.isLoggedIn && store && (
                <Cart
                  title={"CART"}
                  variant="outline-info"
                  style={{ width: "100px" }}
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <main
        style={{ backgroundColor: "rgb(255,255,255)" }
          > */}
        {location.pathname !== "/contact" && <Bg />}
      {/* </main> */}
    </>
  );
};

export default NavBar;

