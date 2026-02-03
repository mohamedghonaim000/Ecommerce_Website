import SecureField from "../../Components/common/SecureField";
import FormField from "../../Components/common/FormField";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignUp() {
    const[user , setUser]=useState({
        userName:"",
        email:"",
        password:"",
        rePassword:"",
        phone:""
    })
  //   react-hook-form for validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            SignUp{" "}
          </h2>

          {/* user name  */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              label="User Name"
              type="text"
              placeholder="Enter Your User Name .."
              {...register("userName", {
                required: "User Name Is Required",
                minLength: {
                  value: 3,
                  message: "User Name Must Be At Least 3 Character",
                },
              })}
            />
            {errors.userName && (
              <small className="text-red-600">{errors.userName.message}</small>
            )}

            {/* Email Field */}
            <FormField
              label="Email"
              type="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email Is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email Format",
                },
              })}
            />
            {errors.email && (
              <small className="text-red-600">{errors.email.message}</small>
            )}

            {/* Password Field */}
            <SecureField
              label="Password"
              type="password"
              placeholder="Enter Your Password.."
              {...register("password", {
                required: "Password Is Required",
                minLength: {
                  value: 6,
                  message: "The password Length Must be More than 5 letters",
                },
              })}
            />
            {errors.password && (
              <small className="text-red-600">{errors.password.message}</small>
            )}

            {/* rePassword Field */}
            <SecureField
              label="Password"
              type="password"
              placeholder="Confirm Your Password.."
              {...register("confirmPassword", {
                required: "Confirm Password Is Required",
                validate: (value) => {
                  return value === password || "Password Didn`t Match";
                },
              })}
            />
            {errors.confirmPassword && (
              <small className="text-red-600">
                {errors.confirmPassword.message}
              </small>
            )}

            {/* user phone  */}
            <FormField
              label="phone"
              type="text"
              placeholder="Enter Your Phone .."
              {...register("phone", {
                required: "phone Is Required",
                maxLength: {
                  value: 11,
                  message: "Invalid Phone Number",
                },
              })}
            />
            {errors.phone && (
              <small className="text-red-600">{errors.phone.message}</small>
            )}

            {/* signup Button */}
            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md font-semibold hover:bg-[var(--hover-color)] transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-[var(--primary-color)] hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
