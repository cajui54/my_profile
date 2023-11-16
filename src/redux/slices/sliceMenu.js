import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    openMenu: false,
    classBtnMenu: '',
    classMoveNav: '-100%',
};

const  menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuStatus: (state, {payload}) => {
            state.openMenu = payload;
        },
        putOnClass: (state, {payload}) => {
            state.classBtnMenu = payload;
        },
        openNav: (state, {payload}) => {
            state.classMoveNav = payload;
        }
    }
});

export const {menuStatus, putOnClass, openNav} = menuSlice.actions;

export default menuSlice.reducer;