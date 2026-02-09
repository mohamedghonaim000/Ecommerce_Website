import React from "react";

export default function QuantitySelector({ quantity, setQuantity , addToCart }) {
  return (
    <div className="flex items-center gap-4 pt-4">
      <div className="flex items-center border rounded-lg">
        <button
          className="px-4 py-2"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button className="px-4 py-2" onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>

      <button className="px-8 py-3 border rounded-lg hover:bg-black hover:text-white transition"
      onClick={()=>{addToCart()}}>
        Add To Cart
      </button>

      <button className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition">
        + Compare
      </button>
    </div>
  );
}
