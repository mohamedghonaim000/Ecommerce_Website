import React from "react";

export default function ImagePopup({
  images = [],
  activeImage,
  onClose,
  onSelect,
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
      >
        ×
      </button>

      <div
        className="bg-white rounded-2xl p-4 max-w-4xl w-full mx-4 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image */}
        <div className="flex justify-center">
          <img
            src={activeImage}
            alt="preview"
            className="max-h-[70vh] lg:max-h-[80vh] object-contain rounded-xl"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center">
          <div className="flex gap-3 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => onSelect(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border
                  ${img === activeImage ? "border-black" : "border-gray-300"}
                `}
                alt="thumb"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
