import React from "react";

const ProductCartSkeleton = () => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="skeleton h-56 w-full rounded-t-xl"></div>

      <div className="card-body space-y-3">
        <div className="skeleton h-5 w-full"></div>
        <div className="skeleton h-5 w-3/4"></div>

        <div className="flex justify-between">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>

        <div className="flex gap-2">
          <div className="skeleton h-6 w-24"></div>
          <div className="skeleton h-5 w-16"></div>
        </div>

        <div className="skeleton h-11 w-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductCartSkeleton;