import { CounterType } from "../types/counterType";

export const counterActions = {
  increment: (value = 0) => {
    return {
      payload: value,
      type: CounterType.INCREMENT,
    };
  },
  decrement: (value = 0) => {
    return {
      payload: value,
      type: CounterType.DECREMENT,
    };
  },
};