import { CounterAction } from "../action/action";
import { CounterState } from "../interface/interfaces";

// (state: EstadoInicial, action: TipoAcciones) : TipoDatoRetorno
export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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