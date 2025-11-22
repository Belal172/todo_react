import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct=createAsyncThunk('product',async()=>{
    const response= await fetch('https://dummyjson.com/products')
    const jResponse=await response.json()
    return jResponse.products
})
const initialState={
    item:[],
    status:undefined,
    error:null

}
const productSlice =createSlice({
    name:'productSlice',
    initialState :initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.status='succesed',
            state.item=action.payload

        })
    }
})
export default productSlice.reducer