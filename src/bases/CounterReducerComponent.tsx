import { useReducer, useState } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction = 
  | { type: "INCREMENT", payload: { value: number } }
  | { type: "RESET" }

// (state: EstadoInicial, action: TipoAcciones) : TipoDatoRetorno
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case "RESET":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      }
      
    case "INCREMENT":
      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
  
    default:
      return state;
  }
}

export default function CounterReducerComponent() {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    // setCounter((prev) => prev + 1);
    dispatch({ type: "RESET" });
  };

  const increaseBy = (value: number) => {
    console.log("value", value);
    dispatch({ type: "INCREMENT", payload: { value } });
  }

  return (
    <>
      <div className="flex flex-col">
        <h1>Counter Reducer</h1>
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
