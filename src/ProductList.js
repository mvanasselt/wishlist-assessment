// import { ProductTile } from "./ProductTile";
import { Button } from "./Button";

export function ProductList({ products, onAddWishlistItem }) {
  {console.log(products)}

  return (
    <div className="bg-neutral-100 flex flex-col items-center ">
      <div className="flex gap-2 m-4 w-screen flex-wrap justify-center ">
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

function ProductTile({ product, name, description, image, price, onAddWishlistItem }) {
  function handleAddItem() {
    onAddWishlistItem(product);
  }

  return (
    <div className="bg-neutral-50 w-[250px] flex flex-col items-center gap-1 hover:shadow-xl p-0.5">
      <img src={process.env.PUBLIC_URL + '/' + image} alt={name} />

        <h3 className="font-bold">{name}</h3>
          <span className="">{description}</span>
          <span className="font-bold">€ {price},-</span>

      <Button onClick={handleAddItem}>Add to wishlist</Button>
    </div>
  );
}

function Category({ children }) {
  return (
    <button 
    
    className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-300 to-lime-300 group-hover:from-green-300 group-hover:to-lime-300">
      <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-50 rounded-md group-hover:bg-opacity-0">{children}</span>
    </button>
  );
}
