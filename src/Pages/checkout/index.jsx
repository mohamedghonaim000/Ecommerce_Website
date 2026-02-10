import { useState } from "react";
import FormField from "../../Components/common/FormField";
import SecureField from "../../Components/common/SecureField";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router";
import { checkOutsession } from "../../Api/order.Api";
export default function Checkout() {
  const [checkError, setCheckerror] = useState("");
  const [loading, setLoading] = useState(false);
    const {cartId} = useParams()
    
  


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true)
      const result = await checkOutsession(cartId,data);
      window.location.href= result.data.session.url
    } catch (e) {
      setCheckerror("Faild ");
      console.log(e.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Payment Details 
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Details Field */}
          <FormField
            label="Details"
            type="text"
            {...register("details", {
            })}
          />
          {errors.details && (
            <small className="text-red-600">{errors.details.message}</small>
          )}

           {/* Phone Field */}
          <FormField
            label="Phone"
            type="tel"
            {...register("phone", {
            })}
          />
          {errors.phone && (
            <small className="text-red-600">{errors.phone.message}</small>
          )}

           {/* City Field */}
          <FormField
            label="City"
            type="text"
            {...register("city", {
            })}
          />
          {errors.city && (
            <small className="text-red-600">{errors.city.message}</small>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold transition duration-300 bg-[var(--primary-color)] text-white hover:bg-[var(--hover-color)]
            ${loading && " cursor-not-allowed" }
          `}
          >
            {loading ? "Checking out..." : "Check Out"}
          </button>
          {checkError && (
            <small className="text-red-600 mt-2">{checkError}</small>
          )}
        </form>

        
      </div>
    </div>
  );
}
