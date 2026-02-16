import { useState } from "react";
import { forgetPassword } from "../../Api/auth";
import FormField from "../../Components/common/FormField";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router";
export default function Forgetpassword() {
  const [forgetError, setForgeterror] = useState("");
  const [loading, setLoading] = useState(false);

  


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true)
      const result = await forgetPassword(data);
      result&&Navigate("/")
    } catch (e) {
      setForgeterror("This Email dosen`t Exisit");
      console.log(e.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Forgot Password{" "}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <FormField
            label="Email"
            type="email"
            placeholder="name@example.com"
            {...register("email", {
              required: "The Email Is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email Format",
              },
            })}
          />
          {errors.email && (
            <small className="text-red-600">{errors.email.message}</small>
          )}


          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold transition duration-300 bg-[var(--primary-color)] text-white hover:bg-[var(--hover-color)]
            ${loading && " cursor-not-allowed" }
          `}
          >
            {loading ? "Sending code..." : "Send Code"}
          </button>
          {forgetError && (
            <small className="text-red-600 mt-2">{forgetError}</small>
          )}
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Back to {" "}
          <Link
            to="/login"
            className="font-medium text-[var(--primary-color)] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
