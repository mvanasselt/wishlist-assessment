import React, { useState } from "react";
// 
import { ProductList } from "./ProductList";
import { Wishlist } from "./Wishlist";
import { Header } from "./Header";

export default function App() {
  const [showWishlist, setShowWishlist] = useState(false);

  function handleShowWishlist() {
    setShowWishlist((show) => !show);
  }

  return (
    <div className="App">
      <Header onShowWishlist={handleShowWishlist} />
      <ProductList />
      {showWishlist && <Wishlist />}
    </div>
  );
  }