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
    <div className="bg-dark">
      <Row className="mt-5 bg-dark p-3 rounded">
        <Col>
          <BtnGroup handleOnFilter={handleOnFilter} />
          <div className="py-2"> {display.length} Movies Found </div>
        </Col>
      </Row>

      <Row className="">
        <Col className="mt-5 justify-content-center">
          {display.map((item) => (
            <MovieCard
              key={item.imdb}
              movie={item}
              showDelete={true}
              func={handleOnDelete}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
};
