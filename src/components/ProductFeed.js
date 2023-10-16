import React from "react";
import "./../pages/index.js";
import Product from "./Product.js";
import { StarIcon } from "@heroicons/react/24/outline";
function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, image, category, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            // images={images && images.length > 0 ? images[0] : null}
          />
        ))}

      <img
        className="md:col-span-full"
        src="http://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, image, category, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
              // images={images && images.length > 0 ? images[0] : null}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, image, category, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            // images={images && images.length > 0 ? images[0] : null}
          />
        ))}
    </div>
  );
}

export default ProductFeed;

//id title price description images category
