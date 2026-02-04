import { useState } from "react";
import { login } from "../../Api/auth";
import FormField from "../../Components/common/FormField";
import SecureField from "../../Components/common/SecureField";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const [loginError, setLoginerror] = useState("");
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
      const result = await login(data);
      result.status == 200
        ? localStorage.setItem("token", result.data.token)
        : setLoginerror("Login Faild check your Eamil amd Password");
    } catch (e) {
      setLoginerror("Login Faild check your Eamil amd Password");
      console.log(e.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Login{" "}
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

          {/* Password Field */}
          <SecureField
            label="Password"
            type="password"
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

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold transition duration-300 bg-[var(--primary-color)] text-white hover:bg-[var(--hover-color)]
            ${loading && " cursor-not-allowed" }
          `}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {loginError && (
            <small className="text-red-600 mt-2">{loginError}</small>
          )}
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-medium text-[var(--primary-color)] hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
