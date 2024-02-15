import React from "react";
import { Button } from "./Button";

export function ProductTile({ product, name, description, image, price, onAddWishlistItem }) {

  function handleAddItem () {
    onAddWishlistItem(product)
  }

  return (
    <div className="bg-neutral-50 w-[250px] flex flex-col ">
      <img className="" src={image} alt={name} />
      <div className="">
        <h3 className="font-bold">{name}</h3>
        <div className="">
          <span className="">{description}</span>
          <span className="font-bold">€ {price},-</span>
          <Button onClick={handleAddItem}>Add to wishlist</Button>
        </div>
      </div>
    </div>
  );
}
