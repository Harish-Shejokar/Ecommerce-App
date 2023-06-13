import React, { useState, useEffect, useContext } from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import { Navbar, Container, Button, FormControl,Row,Col } from "react-bootstrap";
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
      
      <Navbar className="sticky-top " bg="black" expand="xs" variant="dark">
        <Container fluid className=" ">
          <Row className="">
            <Col>
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
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mt-3">
            <Col>
              {AuthCtx.isLoggedIn && (
                <Button onClick={logoutButton} variant="light">
                  Logout
                </Button>
              )}
            </Col>
            <Col>{!AuthCtx.isLoggedIn && <Link to="/login">LogIn</Link>}</Col>
            <Col>
              {/* <NavBar.Text className="search"> */}
              <FormControl style={{ width: 300 }} placeholder="find Products" />
              {/* </NavBar.Text> */}
            </Col>
            <Col>
              {AuthCtx.isLoggedIn && store && (
                <Cart
                  className={classes["cart-btn"]}
                  title={"CART"}
                  variant="outline-info"
                  style={{width:"100px"}}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>

      <main style={{ backgroundColor: "rgb(255,255,255)" }}>
        {!isProduct && <Bg />}

        {/* <Footer /> */}
      </main>
    </>
  );
};

export default NavBar;
