import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, showCounter: true };

// slice for the counter component
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // 'state' is the current state
            state.value++;
        },
        decrement(state) {
            // 'state' is the current state
            state.value--;
        },
        increase(state, action) {
            // 'state' is the current state
            state.value = state.value + action.payload; // payload is the name of the property that will hold any extra data that is dispatched
        },
        toggle(state) {
            // 'state' is the current state
            state.showCounter = !state.showCounter;
        },
    },
});

const initialAuthState = { isAuthenticated: false };

// slice for the authentication component
const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            // 'state' is the current state
            state.isAuthenticated = true;
        },
        logout(state) {
            // 'state' is the current state
            state.isAuthenticated = false;
        },
    },
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
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
