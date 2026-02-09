import { axiosInstance } from "./axiosInstance";

export const getAllproducts = (page) => {
  return axiosInstance.get(`/products?page=${page}&limit=12`);
};

export const getProductById = (id) => {
  return axiosInstance.get(`/products/${id}`);
};
