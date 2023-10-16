import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";

function Product({ id, title, price, description, image, category, rating }) {
  const ratingNumber = rating ? Math.floor(rating.rate) : 1;
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2">{category}</p>

      <Image
        src={image}
        // src={`/${images}`}
        alt="product.png"
        height={200}
        width={200}
        objectFit={"contain"}
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(ratingNumber)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5 ">
        <Currency quantity={price} currency="USD" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            src="https://www.logo.wine/a/logo/Amazon_Prime/Amazon_Prime-Logo.wine.svg"
            height={40}
            width={80}
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
}

export default Product;
