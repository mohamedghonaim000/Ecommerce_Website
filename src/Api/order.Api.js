import { axiosInstance } from "./axiosInstance";

export const checkOutsession = (id, data) => {
  return axiosInstance.post(
    `orders/checkout-session/${id}?url=http://localhost:5173`,
    {
      "shippingAddress": data,
    },
    {
      headers: {
        token: localStorage.getItem("token"),
      },
    },
  );
};

export const getAllorders = (userId)=>{
    return axiosInstance.get(`orders/user/${userId}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    },)
}
