import { userSlice } from "./userSlice"
import { alertSlice } from "./alertSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        alerts: alertSlice.reducer
    }
})

export default store