import { axiosInstance } from "./axiosInstance";
export function getProducts(params={}){
    return axiosInstance.get("products",{params})

}