import logo from "../assets/img/netflix_logo.png";
import avatar from "../assets/img/avatar.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { ButtonGroup, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavbarCustom = () => {
  const location = useLocation();
  return (
    <header>
      <Navbar expand="lg" className="navbar-dark">
        <Container fluid className="px-5">
          <Link to="/" className="navbar-brand">
            <img src={logo} id="logo" alt="Netflix logo" />
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            type="button"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Link
                to="/home"
                className={
                  location.pathname === "/home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Link>
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                TVShows
              </Link>

              <Link
                to="/movies"
                className={
                  location.pathname === "/movies"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Movies
              </Link>

              <Link
                to="/recently-added"
                className={
                  location.pathname === "/recently-added"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Recently Added
              </Link>

              <Link
                to="/my-list"
                className={
                  location.pathname === "/my-list"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                My List
              </Link>
            </Nav>

            <Nav>
              <Nav.Item>
                <Nav.Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Kids</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell-fill icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <ButtonGroup>
                  <Button
                    type="button"
                    aria-expanded="false"
                    style={{ backgroundColor: "black" }}
                    className="bg-transparent avatar"
                  >
                    <img src={avatar} id="avatar" alt="avatar img"></img>
                  </Button>

                  {/* <Navbar.Toggle type="button" aria-controls="basic-nav-dropdown">
                  <img src={avatar} id="avatar"></img>
                </Navbar.Toggle> */}

                  <NavDropdown id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar}
                          id="avatar-small"
                          alt="avatar img small"
                        />
                        Epicoder #1
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Manage Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#">Account</NavDropdown.Item>
                    <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                      Signout Netflix
                    </NavDropdown.Item>
                  </NavDropdown>
                </ButtonGroup>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarCustom;
