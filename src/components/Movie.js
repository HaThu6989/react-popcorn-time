function Movie(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        Year: {props.year} <br />
        Rating: {props.rating} <br />
        <span>RECOMMENDED</span>
      </p>
    </div>
  );
}

export default Movie;
