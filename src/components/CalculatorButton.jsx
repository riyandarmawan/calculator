export default function CalculatorButton({ value, handleClick, className }) {
  return (
    <>
      <input
        type="button"
        value={value}
        onClick={(e) => handleClick(e.target.value)}
        className={`rounded-full bg-slate-500 text-4xl font-bold shadow-md shadow-slate-400/90 hover:opacity-80 focus:opacity-60 active:opacity-70 ${className}`}
      />
    </>
  );
}
