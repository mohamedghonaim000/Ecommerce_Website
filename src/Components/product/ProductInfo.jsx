import React from "react";
import QuantitySelector from "../common/QuantitySelector";
import Rating from "../common/CustomRating";
import ProductColors from "./ProductColors";
import ProductSize from "./ProductSize";

export default function ProductInfo({ products, quantity, setQuantity }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">{products?.title}</h1>
      </div>

      {/* Rating */}
      <Rating products={products} />

      <p className="text-gray-600 leading-relaxed max-w-md">
        {products?.description}
      </p>

      {/* Size */}
      <div>
        <p className="font-medium mb-2">Size</p>
        <ProductSize />
      </div>

      {/* Color */}
      <div>
        <p className="font-medium mb-2">Color</p>
        <ProductColors />
      </div>

      {/* Actions */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Meta */}
      <div className="pt-6 text-sm text-gray-500 space-y-2 border-t">
        <p>
          <span className="font-medium">Brand</span> :{" "}
          {products.brand?.name || "Unknown"}
        </p>
        <p>
          <span className="font-medium">Category</span> :{" "}
          {products.category?.name || "Unknown"}
        </p>
      </div>
    </div>
  );
}
