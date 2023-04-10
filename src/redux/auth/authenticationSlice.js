import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isLogged: false
}

const authenticationSlice = createSlice({
    name: 'authenticationSlice',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            localStorage.setItem("token", state.token);
            localStorage.setItem("isLogged", true);
        },

        signUp: (state, action) => {
            state = action.payload;
        },

        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isLogged = false;
            localStorage.removeItem("isLogged");
            localStorage.removeItem("token");
        }
    }
});

export const { signIn, signUp, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;