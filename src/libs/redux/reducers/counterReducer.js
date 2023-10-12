import { CounterType } from "../types/counterType";

const initState = 0
export function counterReducer( state = initState, action = { type: "", payload: 0 }
) {
  switch (action.type) {
    case CounterType.INCREMENT:
      return state = state + action.payload;
    case CounterType.DECREMENT:
      return state = state - action.payload;
    default:
      return state
  }
}