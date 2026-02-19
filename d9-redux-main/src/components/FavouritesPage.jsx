import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import Company from "./Company";
import { Link } from "react-router-dom";
const FavouritesPage = () => {
  const favouritesList = useSelector((currentState) => currentState.favourites.list);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1 text-center">Favourites Companies</h1>
        </Col>
        <Col xs={9} className="mx-auto mb-5">
          {favouritesList.length !== 0 && favouritesList.map((company, i) => <Company key={"company" + i} company={company} />)}
          {favouritesList.length === 0 && (
            <Alert variant="danger" className="mt-2">
              <Alert.Heading className="py-2">Oops! There's no company saved yet!</Alert.Heading>
              <hr />
              <p className="mb-0 py-1">
                Go back to{" "}
                <Link to="/" className="text-decoration-none text-danger-emphasis fw-bold" style={{ cursor: "pointer" }}>
                  homepage
                </Link>{" "}
                to start saving your favourites companies!
              </p>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesPage;
