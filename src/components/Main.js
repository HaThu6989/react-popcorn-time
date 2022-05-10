import { useState } from "react";
import moviesArr from "../data/movies.json";
import Movie from "./Movie";

function Main() {
  const [movies, setMovies] = useState(moviesArr);

  const filterTopRatedOnly = () => {
    // option 1: we pass the new value
    // setMovies(newListOfMovies);

    // option 2: we pass a function (functional update)
    setMovies((prevValue) => {
      const newListOfMovies = prevValue.filter((movie) => {
        if (movie.rating > 8) {
          return true;
        } else {
          return false;
        }
      });
      return newListOfMovies;
    });
  };

  return (
    <>
      <div className="controls">
        <button onClick={filterTopRatedOnly}>Display Top Rated Only</button>
      </div>

      {movies.map((element) => {
        return (
          <Movie
            key={element.id}
            title={element.title}
            year={element.year}
            rating={element.rating}
            image={element.imgURL}
          />
        );
      })}
    </>
  );
}

export default Main;
