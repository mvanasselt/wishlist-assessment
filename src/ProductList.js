import { ProductTile } from "./ProductTile";

export function ProductList({products, onAddWishlistItem}) {
  
  return (
    <div>
      <h2>ProductList</h2>
      <div className="flex flex-wrap w-30">
        {products.map((product) => (
          <ProductTile product={product} name={product.name} key={product.productid} description={product.detail} image={product.image} price={product.price} onAddWishlistItem={onAddWishlistItem} />
        ))}
      </div>
    </div>
  );
}
