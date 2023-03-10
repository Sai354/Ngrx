import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";

// export const initialState = {
//     counter: 0,
//   };

export const initialState = 0
const counterReducer1 = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0),


    // on(increment, (state) =>
    //  {
    //   return {
    //     ...state,
    //     counter: state.counter + 1,
    //   };
    // }
    // state+1),
    // on(decrement, (state) => {
    //   return {
    //     ...state,
    //     counter: state.counter - 1,
    //   };
    // }),
    // on(reset, (state) => {
    //   return {
    //     ...state,
    //     counter: 0,
    //   };
    // }),
    // on(customIncrement, (state, action) => {
    //   console.log(action);
    //   return {
    //     ...state,
    //     counter: state.counter + action.count,
    //   };
    // }),
    // on(changeChannelName, (state) => {
    //   return {
    //     ...state,
    //     channelName: 'Modified Leela Web Dev',
    //   };
    // })
);



export function counterReducer(state: any, action: any) {
    return counterReducer1(state, action);
}
