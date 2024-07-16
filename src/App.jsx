import { useState } from "react";
import { evaluate } from "mathjs";
import CalculatorButton from "./components/CalculatorButton";

export default function App() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    if (value === "=") {
      calculate();
    } else if (value === 'C') {
      clear();
    } else {
      setInput(input + value);
    }
  }

  function calculate() {
    try {
      setInput(evaluate(input));
    } catch (error) {
      setInput("Error");
    }
  }

  function clear() {
    setInput("")
  }

  return (
    <>
      <div className="container flex h-dvh items-center">
        <div className="w-full overflow-hidden rounded-lg bg-slate-700 p-4 shadow-2xl shadow-slate-700/50">
          <div className="w-full bg-slate-200 p-4 font-input">
            <input
              type="text"
              name="input"
              value={input}
              readOnly
              className="w-full bg-inherit text-right text-6xl font-bold outline-none"
            />
          </div>
          <div className="grid grid-rows-4 gap-4 py-4">
            <div className="grid grid-cols-4 gap-4">
              <CalculatorButton value={"C"} handleClick={handleClick} />
              <CalculatorButton value={"()"} handleClick={handleClick} />
              <CalculatorButton value={"/"} handleClick={handleClick} />
              <CalculatorButton value={"÷"} handleClick={handleClick} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <CalculatorButton value={7} handleClick={handleClick} />
              <CalculatorButton value={8} handleClick={handleClick} />
              <CalculatorButton value={9} handleClick={handleClick} />
              <CalculatorButton value={"*"} handleClick={handleClick} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <CalculatorButton value={4} handleClick={handleClick} />
              <CalculatorButton value={5} handleClick={handleClick} />
              <CalculatorButton value={6} handleClick={handleClick} />
              <CalculatorButton value={"-"} handleClick={handleClick} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <CalculatorButton value={1} handleClick={handleClick} />
              <CalculatorButton value={2} handleClick={handleClick} />
              <CalculatorButton value={3} handleClick={handleClick} />
              <CalculatorButton value={"+"} handleClick={handleClick} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <CalculatorButton value={0} handleClick={handleClick} className="col-span-2" />
              <CalculatorButton value={"."} handleClick={handleClick} />
              <CalculatorButton value={"="} handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
