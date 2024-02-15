import { Button } from "./Button";

export function WishlistItem({ item, image, name, price, onRemoveWishlistItem }) {
  function handleRemoveItem() {
    onRemoveWishlistItem(item);
  }
  return (

    <div className="flex flex-col w-[200px] bg-neutral-50">
      <img className="" src={image} alt={name} />
      <div className="">
        <h3 className="font-bold">{name}</h3>
        <div className="">
          <span className="font-bold">€ {price},-</span>
          <Button onClick={handleRemoveItem}>Remove from wishlist</Button>
        </div>
      </div>
    </div>
  );
}
