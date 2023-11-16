import { combineReducers } from "@reduxjs/toolkit";
import menuSlice from './slices/sliceMenu' 

const rootReducer = combineReducers({
    menuSlice,
});

export default rootReducer;