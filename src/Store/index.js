import { configureStore } from "@reduxjs/toolkit";

import productsReducer from './Slices/products'
import authReducer from './Slices/auth'

const store = configureStore(
    {
        reducer:{
            products:productsReducer,
            auth:authReducer
        }
    }
)

export default store