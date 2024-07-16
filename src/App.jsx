import { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [input, setInput] = useState('');

  function handleClick(value) {
    if (value === "=") {
      calculate();
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

  return (
    <>
      <div className="container flex h-dvh items-center">
        <div className="h-[32rem] w-full overflow-hidden rounded-lg bg-slate-700 shadow-2xl shadow-slate-700/50">
          <div className="font-input w-full bg-slate-200 p-4">
            <input
              type="text"
              name="input"
              value={input}
              readOnly
              className="w-full bg-inherit text-right text-6xl font-bold outline-none"
            />
          </div>
          <div className="grid grid-cols-4 p-4">
            <input
              type="button"
              value={1}
              name="1"
              onClick={(e) => handleClick(e.target.value)}
              className="h-16 w-16 rounded-full bg-slate-500 text-4xl font-bold shadow-md shadow-slate-400/90 hover:opacity-80 focus:opacity-60 active:opacity-70"
            />
            <input
              type="button"
              value={2}
              name="2"
              onClick={(e) => handleClick(e.target.value)}
              className="h-16 w-16 rounded-full bg-slate-500 text-4xl font-bold shadow-md shadow-slate-400/90 hover:opacity-80 focus:opacity-60 active:opacity-70"
            />
            <input
              type="button"
              value={3}
              name="3"
              onClick={(e) => handleClick(e.target.value)}
              className="h-16 w-16 rounded-full bg-slate-500 text-4xl font-bold shadow-md shadow-slate-400/90 hover:opacity-80 focus:opacity-60 active:opacity-70"
            />
            <input
              type="button"
              value={'/'}
              name="/"
              onClick={(e) => handleClick(e.target.value)}
              className="h-16 w-16 rounded-full bg-slate-500 text-4xl font-bold shadow-md shadow-slate-400/90 hover:opacity-80 focus:opacity-60 active:opacity-70"
            />
          </div>
        </div>
      </div>
    </>
  );
}
