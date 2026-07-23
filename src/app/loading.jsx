import ProductCartSkeleton from "@/components/skeleton/ProductCartSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
      {[...Array(9)].map((_, index) => (
        <ProductCartSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;