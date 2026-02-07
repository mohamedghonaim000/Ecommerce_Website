import { axiosInstance } from "./axiosInstance";


export function getAllproducts(){
    return axiosInstance.get("products")
}