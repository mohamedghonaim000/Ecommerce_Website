import React from "react";

export default function ProductSize() {
  return (
    <div className="flex gap-3">
      {["L", "XL", "XS"].map((size) => (
        <button
          key={size}
          className="px-4 py-2 border rounded-md text-sm hover:bg-[#B88E2F] hover:text-white transition"
        >
          {size}
        </button>
      ))}
    </div>
  );
}
