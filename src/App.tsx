import React from "react";
import "./App.css";
import { StarRating } from "./starRating";

function App() {
  return (
    <StarRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={() => alert("doubleClick")}
    />
  );
}

export default App;
