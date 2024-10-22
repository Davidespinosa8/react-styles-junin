/* eslint-disable no-unused-vars */
import React, { useState } from "react";

/* eslint-disable react/prop-types */
export function ProductCard({ product }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flip-card__inner relative w-full h-96 bg-white rounded-lg shadow-lg cursor-pointer transition-transform duration-500 ${
        isFlipped ? "transform rotate-y-180" : ""
      }`}
      style={{ transformStyle: "preserve-3d" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card__front p-6 flex flex-col items-center justify-center gap-4 ${isFlipped ? "hidden" : "flex"}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className={`w-42 h-36 object-contain rounded-md transition-transform duration-300 ${isHovered ? "scale-110 rotate-6" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 text-center">{product.description}</p>
        <p className="text-xl font-bold text-blue-500">${product.price}</p>
      </div>
      <div className={`flip-card__back p-6 flex items-center justify-center bg-gray-200 rounded-lg ${isFlipped ? "flex" : "hidden"}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-max h-max object-cover rounded-md"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
