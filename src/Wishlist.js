import { Button } from "./Button";
export function Wishlist({ wishlistItems, onRemoveWishlistItem }) {

  return <div className="fixed right-0 top-0 w-[350px] h-screen overflow-scroll bg-white border-2 border-grey">Wishlist
  {wishlistItems.map((item) => (
          <WishlistItem item={item} name={item.name} key={item.productid} image={item.image} price={item.price} onRemoveWishlistItem={onRemoveWishlistItem} />
        ))}
        </div>;
}

function WishlistItem({ item, image, name, price, onRemoveWishlistItem}) {
    function handleRemoveItem () {
        onRemoveWishlistItem(item)
      }
  return (

    <div className="border-solid border-2">
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


