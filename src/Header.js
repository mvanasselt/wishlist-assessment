import React from "react";
import { Button } from "./Button";

export function Header({ onShowWishlist, wishlistItems }) {
  return (
    <div className="w-full h-[300px] bg-[url('../public/images/rainbow-fruit.png')] bg-cover sticky top-0">
      <Button onClick={onShowWishlist}>
        Wishlist
        <WishlistCounter wishlistItems={wishlistItems} />
      </Button>
      <h1 className="text-6xl font-bold text-white">Everyday Fresh Food</h1>
    </div>
  );
}

function WishlistCounter({ wishlistItems }) {
  return <div className="text-white">{wishlistItems.length}</div>;
} 
