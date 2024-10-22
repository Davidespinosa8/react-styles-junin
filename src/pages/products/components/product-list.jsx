/* eslint-disable no-unused-vars */
import React from "react";
import { products } from "../mocks/data.json";
import { ProductCard } from "./product-card";

export function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 bg-gray-100 justify-items-center">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
