import React from "react";
import useFetchSingleProduct from "../hooks/useFetchSingleProduct";

const ProductDetails = () => {
  const { isError, isLoading, products } = useFetchSingleProduct();

  if (isLoading && !isError) {
    return (
      <div className="text-center text-2xl p-10 font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      {products ? (
        <div className="bg-white max-w-6xl mx-auto p-6 flex gap-10 shadow-2xl rounded-lg mt-10">

          {/* IMAGE + DESCRIPTION */}
          <div className="w-1/2">
            <img
              src={products.image}
              alt={products.name}
              className="w-full h-96 object-cover rounded-md"
            />

            <p className="text-gray-600 mt-4">
              {products.instructions?.slice(0, 2).join(" ")}
            </p>
          </div>

          {/* DETAILS */}
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">
              {products.name}
            </h1>

            <p className="text-sm text-gray-600">
              Cuisine:{" "}
              <span className="font-medium">{products.cuisine}</span>
            </p>

            <p className="text-sm text-gray-600">
              Difficulty:{" "}
              <span className="font-medium">{products.difficulty}</span>
            </p>

            <p className="text-yellow-500 font-semibold">
              ⭐ {products.rating}
            </p>

            <hr />

            <p className="text-lg font-semibold">
              Price:
              <span className="text-red-600">
             Rs.{products.caloriesPerServing}
              </span>
            </p>

            <p className="text-sm text-gray-600">
              Prep Time: {products.prepTimeMinutes} mins | Cook Time:{" "}
              {products.cookTimeMinutes} mins
            </p>

            {/* INGREDIENTS */}
            <div>
              <h3 className="font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                {products.ingredients?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 cursor-pointer">
                Order Now
              </button>

              <button className="bg-yellow-400 px-6 py-3 rounded-md hover:bg-yellow-500 cursor-pointer">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-xl">Recipe not found</div>
      )}
    </div>
  );
};

export default ProductDetails;
