import {createSlice} from "@reduxjs/toolkit"

export const alertSlice = createSlice({
    name:"alerts",
    initialState:{
        loading:false
    },
    reducers:{
        showLoding:(state) =>{
            state.loading = true
        },
        hideLoding:(state)=>{
            state.loading = false
        }
    }
})

export const {showLoding, hideLoding} = alertSlice.actions