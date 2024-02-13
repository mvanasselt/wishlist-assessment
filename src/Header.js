import React from "react";
import { Button } from "./Button";

export function Header({ onShowWishlist }) {
  return (
    <div className="w-full h-[350px] bg-[url('../public/images/rainbow-fruit.png')] bg-cover">
      <h1 className="text-6xl font-bold text-white">Everyday Fresh Food</h1>
      <Button onClick={onShowWishlist}>Wishlist</Button>
    </div>
  );
}
