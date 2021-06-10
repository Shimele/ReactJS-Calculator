import { useState, useEffect } from "react";

import "./App.css";
import UI from "./components/ui";
import Results from "./components/results";

function App() {
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState(0);

  const handleClick = (name) => {
    setResult((prevResult) => [...prevResult, name]);
    console.log(result);
  };

  const calculate = (name) => {
    const newResult = result.join("");
    const newAnswer = eval(newResult);
    setResult(newAnswer.toString());
  };

  const reset = () => {
    setResult("");
    setAnswer(0);
  };
  const backSpace = () => {
    const newresult = [...result];
    newresult.splice(-1, 1);
    setResult(newresult);
  };

  return (
    <div className="App">
      <hi>A Simple Calculator</hi>
      <Results result={result} answer={answer} />
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
