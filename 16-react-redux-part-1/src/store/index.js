import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;

// import { createStore } from "redux";

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };

//         // never mutate the existing state
//         // e.g.:
//         // state.counter++;
//         // return state;
//         // a state object must always be returned
//     }
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "toggle") {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter, // inverts the value of the current showCounter state
//         };
//     }

//     return state;
// };

// const store = createStore(counterReducer);

// export default store;
