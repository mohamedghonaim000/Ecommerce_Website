import axios from "axios"
// import { axiosInstance } from "./axiosInstance"

export const getUserCart=()=>{
    return axios.get('https://ecommerce.routemisr.com/api/v2/cart',
        {
            headers:{
                token:localStorage.getItem('token')
            }
        }
    )
}

export const addProductToCart=(productId)=>{
    return axios.post('https://ecommerce.routemisr.com/api/v2/cart',
        {productId},
        {
            headers:{
                token:localStorage.getItem('token'),
                'Content-Type':'application/json'
            }
        }
    )
}

export const updateCartItem = (productId, quantity) => {
    return axios.put(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
        {"count":quantity},
        {
            headers:{
                token:localStorage.getItem('token'),
                'Content-Type':'application/json'



            }
        }
    )
}

export const removeCartItem = (productId) => {
    return axios.delete(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
        {
            headers:{
                token:localStorage.getItem('token')
            }
        }
    )
}