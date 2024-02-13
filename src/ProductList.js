import React, { useState, useEffect } from "react";
import { ProductTile } from "./ProductTile";

export function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`/products.json`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();

      if (!jsonData || jsonData.length === 0) {
        throw new Error("Empty response or unexpected data format");
      }

      setProduct(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div>
      <h2>ProductList</h2>
      <div className="flex flex-wrap w-30">
        {product.map((product) => (
          <ProductTile name={product.name} key={product.productid} description={product.detail} image={product.image} price={product.price} />
        ))}
      </div>
    </div>
  );
}
