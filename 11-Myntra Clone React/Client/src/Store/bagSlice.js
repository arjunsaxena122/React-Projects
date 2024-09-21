import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name:"bag",
    initialState:[],
    reducers:{
        addToBag:(state,action)=>{
            state.push(action.payload)
        },
        deleteToBag:(state,action)=>{
            return state.filter((id)=>id!==action.payload)
        }
    }
})

export default bagSlice.reducer;

export const {addToBag,deleteToBag} = bagSlice.actions