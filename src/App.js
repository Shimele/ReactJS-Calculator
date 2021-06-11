import { useState, useEffect } from "react";

import "./App.css";
import UI from "./components/ui";
import Results from "./components/results";

function App() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleClick = (name) => {
    setResult((prevResult) => [...prevResult, name]);
  };

  const errorMessage = () => {
    const lastElement = result.pop();
    if (isNaN(lastElement)) {
      setError("error");
    }
  };
  const calculate = (name) => {
    const newResult = result.join("");
    const newAnswer = eval(newResult);
    setResult(newAnswer.toString());
  };

  const reset = () => {
    setResult("");
  };
  const backSpace = () => {
    const newresult = [...result];
    newresult.splice(-1, 1);
    setResult(newresult);
  };

  return (
    <div className="App">
      <hi>A Simple Calculator</hi>
      <h1>{error}</h1>
      <Results result={result} />
      <UI
        onClick={handleClick}
        calculate={calculate}
        clear={reset}
        backSpace={backSpace}
      />
    </div>
  );
}

export default App;
