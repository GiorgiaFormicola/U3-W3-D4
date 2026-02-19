import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleFavouritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favouritesList = useSelector((currentState) => currentState.favourites.list);
  const location = useLocation();

  return (
    <Row className="mx-0 mt-3 p-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={1} className={location.pathname !== "/" ? "d-none" : ""}>
        <i
          title="Add to favourites"
          className={favouritesList.includes(data.company_name) ? "bi bi-suit-heart-fill text-danger fs-5" : "bi bi-suit-heart-fill fs-5"}
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(handleFavouritesAction(data.company_name));
          }}
        ></i>
      </Col>
      <Col xs={3} className="border-end">
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
