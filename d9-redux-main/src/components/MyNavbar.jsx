import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const favouritesList = useSelector((currentState) => currentState.favourites.list);
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Remote Job
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className={location.pathname === "/" ? "nav-link active fw-semibold" : "nav-link"}>
              Homepage
            </Link>
            <Link to="/favourites" className={location.pathname === "/favourites" ? "nav-link active fw-semibold" : "nav-link"}>
              Favourites <Badge bg={favouritesList.length === 0 ? "secondary" : "danger"}>{favouritesList.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
