import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

function OffcanvasExample() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="black"
          variant="dark"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <div>
              <Link to={"/"}>
                <img
                  className="logoNav"
                  src="https://i.ibb.co/QvNrZYP/logo-big.png"
                  alt=""
                />
              </Link>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {loggedIn && (
                    <>
                      <Link
                        className="nav-link"
                        to="/events"
                        onClick={() =>
                          document
                            .querySelector(".offcanvas-collapse")
                            .classList.remove("show")
                        }
                      >
                        Events
                      </Link>
                      <br />
                      <Link
                        className="nav-link"
                        to="/artists"
                        onClick={() =>
                          document
                            .querySelector(".offcanvas-collapse")
                            .classList.remove("show")
                        }
                      >
                        Artists
                      </Link>
                      <br />

                      <Link
                        className="nav-link"
                        to="/profile"
                        onClick={() =>
                          document
                            .querySelector(".offcanvas-collapse")
                            .classList.remove("show")
                        }
                      >
                        Profile
                      </Link>
                      <br />

                      <Link
                        className="nav-link"
                        to="/myevents"
                        onClick={() =>
                          document
                            .querySelector(".offcanvas-collapse")
                            .classList.remove("show")
                        }
                      >
                        My events
                      </Link>
                      <br />

                      <Link
                        className="nav-link"
                        to="/help"
                        onClick={() =>
                          document
                            .querySelector(".offcanvas-collapse")
                            .classList.remove("show")
                        }
                      >
                        Help
                      </Link>

                      <br />

                      <Link
                        className="nav-link"
                        to="/myevents"
                        onClick={() =>
                          document
                            .querySelector(".offcanvas-collapse")
                            .classList.remove("show")
                        }
                      >
                        Logout
                      </Link>
                      <br />
                    </>
                  )}

                  {!loggedIn && (
                    <>
                      <Link
                        className="nav-link"
                        to="/signup"
                        onClick={() =>
                          document
                            .querySelector(".offcanvas-collapse")
                            .classList.remove("show")
                        }
                      >
                        SignUp
                      </Link>
                      <br />

                      <Link
                        className="nav-link"
                        to="/login"
                        onClick={() =>
                          document
                            .querySelector(".offcanvas-collapse")
                            .classList.remove("show")
                        }
                      >
                        Login
                      </Link>
                      <br />
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
