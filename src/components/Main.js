import Movie from "./Movie";

function Main(props) {
  return (
    <>
      {props.listOfMovies.map((element, index) => {
        return (
          <Movie
            // key={element.id}
            key={index}
            title={element.title}
            year={element.year}
            rating={element.rating}
            // id={element.id}
            // calbackDeleteMovie={props.callbackDeleteMovie}
          />
        );
      })}
    </>
  );
}

export default Main;
