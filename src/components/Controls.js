import "./Controls.css";

function Controls(props) {
  return (
    <div className="Controls">
      <h2>Controls : </h2>
      {/* <button onClick={props.myFunction}>Display Top Rated Only</button> */}
      <button onClick={() => props.myFunction(9)}>
        Display Movies 9 and above
      </button>
      <button onClick={() => props.myFunction(10)}>
        Display Movies 10 and above
      </button>
    </div>
  );
}

export default Controls;
