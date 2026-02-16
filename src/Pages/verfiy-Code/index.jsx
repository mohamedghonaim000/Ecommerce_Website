import { useState } from "react";
import {  verifyCode } from "../../Api/auth";
import FormField from "../../Components/common/FormField";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router";
export default function Verfiycode() {
  const [error, setError] = useState("");
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
      const result = await verifyCode(data);
      result&&Navigate("/")
    } catch (e) {
      setError("This code isn`t valid");
      console.log(e.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Verify Code{" "}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* code Field */}
          <FormField
            label="Code"
            type="text"
            placeholder="- - - - - -"
            {...register("code", {
              required: "The code Is Required",
            })}
          />
          {errors.code && (
            <small className="text-red-600">{errors.code.message}</small>
          )}


          {/* submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold transition duration-300 bg-[var(--primary-color)] text-white hover:bg-[var(--hover-color)]
            ${loading && " cursor-not-allowed" }
          `}
          >
            {loading ? "Verfing code..." : "Verfiy Code"}
          </button>
          {error && (
            <small className="text-red-600 mt-2">{error}</small>
          )}
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Back to {" "}
          <Link
            to="/forgetpassword"
            className="font-medium text-[var(--primary-color)] hover:underline"
          >
            Forgot Password
          </Link>
        </p>
      </div>
    </div>
  );
}
