import "./App.css";
import { Button, Container } from "react-bootstrap";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovieToList = (movieObj) => {
    const newArg = movies.filter((item) => item.imdbID !== movieObj.imdbID);

    setMovies([...newArg, movieObj]);
  };

  console.log(movies);

  return (
    <div className="wrapper">
      <Container>
        {/* Title */}
        <Title />

        {/* Form */}
        <SearchForm addMovieToList={addMovieToList} />

        {/* Movie List */}
        <MovieList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
