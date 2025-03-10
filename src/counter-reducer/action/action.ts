export type CounterAction = 
  | { type: "INCREMENT", payload: { value: number } }
  | { type: "RESET" }


export const doReset = ():CounterAction => ({ type: "RESET" });
export const doIncreaseBy = (value:number):CounterAction => ({ type: "INCREMENT", payload: {value: value} });
