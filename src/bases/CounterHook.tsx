import { useCounter } from "../hooks/useCounter";

const MAXIMUN_COUNT = 10;

export default function CounterHook() {
  const { counter, elementToAnimate, handleCounter } = useCounter({
    maxCount: MAXIMUN_COUNT,
  });

  return (
    <>
      <div className="flex flex-col ">
        <h1>Counter Hook</h1>
        <h2 ref={elementToAnimate}>{counter}</h2>
        <button onClick={handleCounter}>+1</button>
      </div>
    </>
  );
}
