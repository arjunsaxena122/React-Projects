import { createSlice } from "@reduxjs/toolkit";
export const fetchSlice = createSlice({
    name:"fetchStatus",
    initialState:{
        fetchDone: false,
        currentlyFetching:false,
    },
    reducers:{
        markFetchDone:(state)=>{
             state.fetchDone = true;
        },
        markFetchStarting:(state)=>{
             state.currentlyFetching= true;
        },
        markFetchFinished:(state)=>{
             state.currentlyFetching = false;
        }
    }
})

export default fetchSlice.reducer

export const {markFetchDone,markFetchFinished,markFetchStarting} = fetchSlice.actions

