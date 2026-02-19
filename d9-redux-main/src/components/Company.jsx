import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FROM_FAVOURITES } from "../redux/actions";

const Company = ({ company }) => {
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 py-3 ps-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={11} className="border-end">
        <Link to={`/${company}`}>{company}</Link>
      </Col>

      <Col xs={1} className="text-center">
        <i
          id="remove"
          title="Remove from favourites"
          className="bi bi-x-circle-fill fs-5"
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({
              type: REMOVE_FROM_FAVOURITES,
              payload: company,
            });
          }}
        ></i>
      </Col>
    </Row>
  );
};
export default Company;
