import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState: {
        user: null,
        isAuthenticated: false,
    },
    reducers:{
        setUser: (state,action)=>{
            state.user = action.payload
        },
        setAuthenticated: (state,action)=>{
            state.isAuthenticated = action.payload
        },
        setPostOfFollowing: (state,action) => {
            state.postOfFollowing = action.payload
        }
    }
})

export const { setUser , setAuthenticated , setPostOfFollowing} = userSlice.actions;
