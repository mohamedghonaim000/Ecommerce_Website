import { BiErrorCircle, BiServer } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router";

export default function RouteError({
  status = "500",
  message = "Internal Server Error",
  description = "An unexpected error has occurred on the server.",
}) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F1E7] px-6 py-24 text-[#000000] selection:bg-[#000000] selection:text-[#F9F1E7]">
      <div className="mb-8 animate-bounce">
        {/* If status is 404, show error icon; otherwise show server icon */}
        {status === "404" ? (
          <BiErrorCircle size={80} />
        ) : (
          <BiServer size={80} />
        )}
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-9xl font-black tracking-tighter leading-none">
          {status}
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
          Oops! {message}
        </h2>

        <p className="max-w-md mx-auto text-[#000000]/70 font-medium">
          {description}
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link
          to={"/"}
          reloadDocument
          className="flex items-center justify-center gap-2 px-8 py-4 bg-[#000000] text-[#F9F1E7] font-bold uppercase tracking-widest transition-all hover:opacity-90 active:scale-95"
        >
          <IoArrowBackOutline size={20} />
          Back to Home
        </Link>

        {/* If the status is not 404, show the Try Again button */}
        {status !== "404" && (
          <Link
            to={pathname}
            reloadDocument
            className="px-8 py-4 border-2 border-[#000000] text-[#000000] font-bold uppercase tracking-widest transition-all hover:bg-[#000000] hover:text-[#F9F1E7] active:scale-95"
          >
            Try Again
          </Link>
        )}
      </div>
    </div>
  );
}
