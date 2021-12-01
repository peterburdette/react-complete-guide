import { createSlice } from "@reduxjs/toolkit";

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

export const authActions = authSlice.actions;
export default authSlice.reducer;
