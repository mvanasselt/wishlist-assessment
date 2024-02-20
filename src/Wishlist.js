import { WishlistItem } from "./WishlistItem";
export function Wishlist({ wishlistItems, onRemoveWishlistItem }) {

  return <div className="fixed right-0 top-0 w-[250px] h-screen overflow-scroll bg-neutral-100 flex flex-col items-center gap-3 shadow-md">Wishlist
  {wishlistItems.map((item) => (
          <WishlistItem item={item} name={item.name} key={item.productid} image={item.image} price={item.price} onRemoveWishlistItem={onRemoveWishlistItem} />
        ))}
        </div>;
}


