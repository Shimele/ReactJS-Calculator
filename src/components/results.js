import React from "react";
import "../App.css";

function Results(props) {
  return (
    <div className="ui left aligned segment display-result">
      <p>{props.result}</p>
    </div>
  );
}

export default Results;
