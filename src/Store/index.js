import { configureStore } from "@reduxjs/toolkit";

import productsReducer from './Slices/products'

const store = configureStore(
    {
        reducer:{
            products:productsReducer
        }
    }
)

export default store