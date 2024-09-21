import { configureStore } from "@reduxjs/toolkit"
import itemsReducer from "./itemSlice"
import fetchReducer from "./fetchSlice"
import bagReducer from "./bagSlice"

export const myntraStore = configureStore({
    reducer:{
        items:itemsReducer,
        fetchStatus: fetchReducer,
        bag:bagReducer
    }
})