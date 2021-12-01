import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
