import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BtnGroup } from "./BtnGroup";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div className="bg-dark">
      <Row className="mt-5 bg-dark p-3 rounded">
        <Col>
          <BtnGroup />
          <div className="py-2"> {movies.length} Movies Found </div>
        </Col>
      </Row>

      <Row className="">
        <Col className="mt-5 justify-content-center">
          {movies.map((item) => (
            <MovieCard key={item.imdb} movie={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
