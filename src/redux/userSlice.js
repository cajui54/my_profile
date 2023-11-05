import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'profile',
    initialState: {
        displayNav: 'displayNone',
        menuOpen: false,
    },
    reducers: {
       showMenu(state, {payload}) {
        if(payload.type) return {...state, displayNav: 'displayNone', menuOpen: payload.type}
        else return {...state, displayNav: 'displayOn', menuOpen: payload.type}
       },
    }
})

export const {showMenu} = slice.actions;

export const selectUser = state =>  state.profile;

export default slice.reducer;