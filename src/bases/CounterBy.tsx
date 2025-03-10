import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export default function CounterBy({ initialValue = 5 }: Props) {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleCounter = (value: number) => {
    setCounterState((prev) => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <div className="flex flex-col ">
        <h1>CounterBy: {counterState.counter}</h1>
        <h1>Clicks: {counterState.clicks}</h1>
        <button onClick={() => handleCounter(1)}>+1</button>
        <button onClick={() => handleCounter(5)}>+5</button>
      </div>
    </>
  );
}
