import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/pharmacy/parmacylist.slice";


export const store = configureStore({
    reducer: userReducer
})