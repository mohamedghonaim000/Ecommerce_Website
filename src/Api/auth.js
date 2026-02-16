import { axiosInstance } from "./axiosInstance";

export function createAccount(data) {
  return axiosInstance.post("auth/signup", {
    "name": data.userName,
    "email": data.email,
    "password": data.password,
    "rePassword": data.confirmPassword,
    "phone": data.phone,
  });
}

export function login(data) {
  return axiosInstance.post("auth/signin", {
    email: data.email,
    password: data.password,
  });
}

export function forgetPassword(data){
  return axiosInstance.post("auth/forgotPasswords",{
    "email":data.email
  })
}

export function verifyCode(data){
  return axiosInstance.post("auth/verifyResetCode",{
    "email":data.code
  })
}
