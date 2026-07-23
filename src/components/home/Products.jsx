import React from "react";
import products from "@/data/toys.json";
import ProductCart from "../cards/ProductCart";

const Products = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product, index) => (
          <ProductCart
            key={index}
            product={{
              ...product,
              _id: String(index + 1),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;