import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      year,
      rating,
    };

    props.callbackCreateMovie(newMovie);

    setTitle("");
    setYear("");
    setRating("");
  };

  return (
    <div className="AddMovie">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="number"
          name="year"
          placeholder="2000"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
        <button>Create</button>
      </form>
    </div>
  );
}

export default AddMovie;
