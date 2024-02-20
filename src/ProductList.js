import { ProductTile } from "./ProductTile";

export function ProductList({ products, onAddWishlistItem }) {
  return (
    <div className="bg-neutral-100 flex flex-col items-center ">
      <div className="flex gap-2 m-4">
        <Category>All</Category>
        <Category>Seed</Category>
        <Category>Fruit</Category>
        <Category>Herbs</Category>
        <Category>Vegetable</Category>
        <Category>Spices</Category>
      </div>
      <div className="flex flex-wrap w-30 container gap-5 self-center justify-center">
        {products.map((product) => (
          <ProductTile
            product={product}
            name={product.name}
            key={product.productid}
            description={product.detail}
            image={product.image}
            price={product.price}
            onAddWishlistItem={onAddWishlistItem}
          />
        ))}
      </div>
    </div>
  );
}

function Category({ children }) {
  return (
    <button class="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-300 to-lime-300 group-hover:from-green-300 group-hover:to-lime-300 ">
      <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-50 rounded-md group-hover:bg-opacity-0">{children}</span>
    </button>
  );
}
