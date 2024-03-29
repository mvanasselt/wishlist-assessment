import React, { useState, useEffect } from "react";
import { ProductList } from "./ProductList";
import { Wishlist } from "./Wishlist";
import { Header } from "./Header";

export default function App() {
  const [showWishlist, setShowWishlist] = useState(false);
  const [products, setProducts] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  function handleShowWishlist() {
    setShowWishlist((show) => !show);
  }

  function handleAddWishlistItem(product) {
    if (!wishlistItems.includes(product)){
    setWishlistItems((items) => [...items, product])
    }
  }

  function handleRemoveWishlistItem(product) {
    setWishlistItems((items) => items.filter(item => item.productid !== product.productid))
  }

  function handleRemoveAllItems() {
    setWishlistItems([]);
  }
 
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(`./products.json`, {
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

        setProducts(jsonData.products);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
  
  return (
    <>
      <Header onShowWishlist={handleShowWishlist} wishlistItems={wishlistItems}/>
      <ProductList products={products} onAddWishlistItem={handleAddWishlistItem}/>
      {showWishlist && <Wishlist wishlistItems={wishlistItems} onRemoveWishlistItem={handleRemoveWishlistItem} onRemoveAllItems={handleRemoveAllItems} onShowWishlist={handleShowWishlist} /> }
    </>
  );
}
