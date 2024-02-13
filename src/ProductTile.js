import React from "react";
import { Button } from "./Button";

export function ProductTile({ name, description, image, price }) {
  return (
    <div className="border-solid border-2">
      <img className="" src={image} alt={name} />
      <div className="">
        <h3 className="font-bold">{name}</h3>
        <div className="">
          <span className="">{description}</span>
          <span className="font-bold">€ {price},-</span>
          <Button>Add to wishlist</Button>
        </div>
      </div>
    </div>
  );
}
