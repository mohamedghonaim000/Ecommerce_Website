import React from "react";

export default function ProductColors() {
  return (
    <div className="flex gap-3">
      <span className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer" />
      <span className="w-8 h-8 rounded-full bg-black cursor-pointer" />
      <span className="w-8 h-8 rounded-full bg-yellow-700 cursor-pointer" />
    </div>
  );
}
