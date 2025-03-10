import { useReducer, useState } from "react";
import { CounterAction, doIncreaseBy, doReset } from "./action/action";
import { CounterState } from "./interface/interfaces";
import { counterReducer } from "./state/counterReducer";


const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};



export default function CounterReducerComponent() {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    // setCounter((prev) => prev + 1);
    // dispatch({ type: "RESET" });
    dispatch( doReset() );
  };

  const increaseBy = (value: number) => {
    // console.log("value", value);
    // dispatch({ type: "INCREMENT", payload: { value } });
    dispatch(doIncreaseBy(value));
  }

  return (
    <>
      <div className="flex flex-col">
        <h1>Counter Reducer - Module</h1>
        <code>{JSON.stringify(counterState)}</code>
        <div className="flex flex-row gap-2">
          <button onClick={handleReset}>Reset</button>
          <button onClick={() => increaseBy(1)}>+1</button>
          <button onClick={() => increaseBy(5)}>+5</button>
          <button onClick={() => increaseBy(10)}>+10</button>
        </div>
      </div>
    </>
  );
}
