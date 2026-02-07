export default function ProductDetailsTabs({ products }) {
  return (
    <>
      <div className="flex justify-center gap-10 text-sm font-medium text-gray-400 mb-10">
        <button className="text-black border-b-2 border-black pb-2 text-2xl font-semibold">
          Description
        </button>
        <button className="hover:text-black transition text-2xl font-semibold">
          Additional Information
        </button>
        <button className="hover:text-black transition text-2xl font-semibold">
          Reviews [{products?.ratingsQuantity || 0}]
        </button>
      </div>

      {/* Text */}
      <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-500 leading-relaxed text-sm">
        <p>{products?.description || "No description available."}</p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-16">
        <div className=" rounded-2xl p-6 flex items-center justify-center w-[500px] h-[500px]">
          <img
            src={products?.images?.[0] || placeholder}
            alt="sofa"
            className="rounded-xl object-contain w-full h-full"
            loading="lazy"
          />
        </div>

        <div className=" rounded-2xl p-6 flex items-center justify-center w-[500px] h-[500px]">
          <img
            src={products?.images?.[1] || placeholder}
            alt="sofa"
            className="rounded-xl object-contain w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
