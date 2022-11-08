import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { BtnGroup } from "./BtnGroup";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies, handleOnDelete }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(movies);
  }, [movies]);

  // []. render all the time -> without dependencies
  // rendeer ontime and only
  // render if some soecific props updates [variable]

  const handleOnFilter = (str) => {
    str === "all"
      ? setDisplay(movies)
      : setDisplay(movies.filter((item) => item.cat === str));
    console.log(str);
  };

  return (
    <div className="p-3 rounded card-size">
      <Row className="mt-5">
        <Col></Col>
        <BtnGroup handleOnFilter={handleOnFilter} />
        <div className="py-2"> {display.length} Movies Found </div>
        <Col></Col>
      </Row>
      <hr />
      <Row className="mt-5 bg-grey">
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
          {display.map((item) => (
            <MovieCard
              key={item.imdb}
              movie={item}
              showDelete={true}
              handleOnDelete={handleOnDelete}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
};
