import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Step /> */}
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="common">
        <button onClick={() => setStep((c) => c - 1)}> - </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((c) => c + 1)}> + </button>
      </div>
      <div className="common">
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <p>Count: {count} </p>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day from now Today is `
            : `${Math.abs(count)} days ago Today is`}
        </span>
        <span>{date.toDateString()} </span>{" "}
      </p>
    </div>
  );
}
