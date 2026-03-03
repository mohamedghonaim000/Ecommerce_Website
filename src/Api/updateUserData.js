import { axiosInstance } from "./axiosInstance";

export const updateUserData = (data) => {
    return axiosInstance.put(`/users/updateMe`,
        {
            "name": data.name,
            "email": data.email,
            "phone": data.phone
        },
        {
            headers: {
                token: localStorage.getItem("token"),
            },
        },
        
    );
};
