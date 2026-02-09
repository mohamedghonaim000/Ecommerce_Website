import { axiosInstance } from "./axiosInstance"

export const getUserCart=()=>{
    return axiosInstance.get('/cart',
        {
            headers:{
                token:localStorage.getItem('token')
            }
        }
    )
}

export const addProductToCart=(productId)=>{
    return axiosInstance.post('/cart',
        {productId},
        {
            headers:{
                token:localStorage.getItem('token')
            }
        }
    )
}

export const updateCartItem = (productId, quantity) => {
    return axiosInstance.put(`/cart/${productId}`,
        {quantity},
        {
            headers:{
                token:localStorage.getItem('token')
            }
        }
    )
}

export const removeCartItem = (productId) => {
    return axiosInstance.delete(`/cart/${productId}`,
        {
            headers:{
                token:localStorage.getItem('token')
            }
        }
    )
}