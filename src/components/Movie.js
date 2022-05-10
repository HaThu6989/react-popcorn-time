function Movie(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        Year: {props.year} <br />
        Rating: {props.rating} <br />
        {props.rating > 8 ? <span>RECOMMENDED</span> : <span>SKIP</span>}
        <span>RECOMMENDED</span> : <span>SKIP</span>
      </p>
      <div>
        {props.image ? (
          <img src={props.image} />
        ) : (
          <img placeholder={props.title} />
        )}
      </div>
    </div>
  );
}

export default Movie;
