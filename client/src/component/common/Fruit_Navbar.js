import React, { useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../Redux/ReduxUserData/UserDataAction";

const FruitNavbar = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reduxUserData = useSelector((state) => state.userData);
  console.log("reduxUserData: ", reduxUserData);
  // console.log(reduxUserData.data, reduxUserData.loading, reduxUserData.error);

  const logoutHandler = () => {
    if (reduxUserData.data.email) {
      window.open(`${BACKEND_URL}/auth/logout`, "_self");
      navigate("/");
    }
  };
  const loginHandler = () => {
    navigate("/signin");
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="  bg-body-dark  w-100 bg-body-dark "
    >
      <Container>
        <span>
          <img
            src="/fruit_image/fruits store.jpg"
            className=" rounded-5"
            width={50}
          />
        </span>
        <Navbar.Brand className="nav_text fw-bold fs-4 px-3">
          FRUITS STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" mx-auto fs-5 ">
            <Nav.Link href="/" className="nav_text">
              HOME
            </Nav.Link>
            <Nav.Link href="/product" className="nav_text">
              PRODUCT
            </Nav.Link>
            <Nav.Link href="/about" className="nav_text">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="/contact" className="nav_text">
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav>
            {reduxUserData.data.userProfile && (
              <div className="center ">
                <img
                  src={reduxUserData.data.userProfile}
                  width={40}
                  height={40}
                  alt=""
                  className="mx-2 rounded-circle m-xs-4"
                />
              </div>
            )}
            {reduxUserData.data.email ? (
              <span>
                <Button
                  onClick={() => {
                    logoutHandler();
                  }}
                  className="nav_button"
                >
                  Logout
                </Button>
              </span>
            ) : (
              <span>
                <Button
                  onClick={() => {
                    loginHandler();
                  }}
                  className="nav_button"
                >
                  Login
                </Button>
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FruitNavbar;