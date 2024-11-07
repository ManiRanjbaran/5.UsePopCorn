import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" onMovieRating={setMovieRating} />
      <p>This movie was Rated {movieRating}.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      className="test"
      messages={["terrible", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
