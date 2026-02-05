import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllproducts } from "../../Api/products.Api";



export const productsAction = createAsyncThunk("products/getll",async ()=>{
    try{
        const result =await getAllproducts();
        return result.data.data
    }catch{
        throw new Error("The Server Failled")
    }
})
const productsSlice=createSlice({
    name:"products",
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(productsAction.fulfilled , (state , action)=>{
            state.data=action.payload
            state.loading=false
        });
        builder.addCase(productsAction.pending , (state)=>{
            state.loading=true
        });

        builder.addCase(productsAction.rejected , (state , action)=>{
            state.loading=false
            state.error = action.error
        });
    }
})

export default productsSlice.reducer