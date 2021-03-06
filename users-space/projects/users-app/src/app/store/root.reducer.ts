import { Action } from "@ngrx/store";

const initialState = {
  counter: 0
};
export function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    default: return state;
  }
}
