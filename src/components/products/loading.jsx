
import React from "react";
import ProductCartSkeleton from "../skeleton/ProductCartSkeleton";

const loading = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
      {[...Array(9)].map((_, index) => (
        <ProductCartSkeleton key={index}></ProductCartSkeleton>
      ))}
    </div>
  );
};

export default loading;