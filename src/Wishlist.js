import { Button } from "./Button";
export function Wishlist({ wishlistItems, onRemoveWishlistItem, onRemoveAllItems, onShowWishlist }) {
  return (
    <div className="fixed right-0 top-0 w-[250px] h-full overflow-y-scroll overflow-x-hidden bg-neutral-100 flex flex-col items-center gap-3 shadow-md">
     <div className="flex justify-between w-full m-1">
        <h2 className="text-2xl pl-4 m-1" >Wishlist</h2>
        <Button onClick={onShowWishlist}>&times;</Button>
     </div>
      {wishlistItems.length > 0 && <Button onClick={onRemoveAllItems}>Remove All</Button>}
      {wishlistItems.map((item) => (
        <WishlistItem
          item={item}
          name={item.name}
          key={item.productid}
          image={item.image}
          price={item.price}
          onRemoveWishlistItem={onRemoveWishlistItem}
        />
      ))}
    </div>
  );
}

function WishlistItem({ item, image, name, price, onRemoveWishlistItem }) {
  function handleRemoveItem() {
    onRemoveWishlistItem(item);
  }
  return (
    <div className="flex flex-col items-center gap-1 w-[200px] bg-neutral-50 rounded-md">
      <img src={process.env.PUBLIC_URL + "/" + image} alt={name} />

      <h3 className="font-bold">{name}</h3>

      <span className="font-bold">€ {price},-</span>
      <Button onClick={handleRemoveItem}>Remove from wishlist</Button>
    </div>
  );
}
