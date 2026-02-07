import React, { useState } from "react";
import ImagePopup from "./ImagePopup";

export default function ImagesGallery({ products, layout = "horizontal" }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const mainImage =
    selectedImage || (products?.images?.length ? products.images[0] : "");

  return (
    <div
      className={`
    flex flex-col-reverse  gap-4 cursor-pointer
    ${layout === "horizontal" ? "lg:flex-row" : "lg:flex-col"}
  `}
    >
      {/* Thumbnails */}
      <div
        className={`
    flex gap-4 justify-center lg:justify-start
    ${layout === "horizontal" ? "flex-row lg:flex-col" : "flex-row"}
  `}
      >
        {products?.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumbnail"
            loading="lazy"
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 object-cover rounded-lg border cursor-pointer
              ${mainImage === img ? "border-black" : "border-gray-300"}
            `}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1" onClick={() => setOpen(true)}>
        <img
          src={mainImage}
          alt="product"
          loading="lazy"
          className="w-full rounded-xl object-cover"
        />
      </div>

      {open && (
        <ImagePopup
          images={products.images}
          activeImage={mainImage}
          onSelect={setSelectedImage}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
