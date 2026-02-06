import { useLocation } from "react-router-dom";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
function ProductDetailPage() {
   const { dispatch } = useContext(CartContext);
  const { state } = useLocation();   
  const [counter, setCounter] = useState(1);

  if (!state) return <p>Loading...</p>; 

  
 

  const { ingredients, instructions, mealType, tags } = state;
  // console.log(state);
  return (
    <main className="my-10">
      <section className="  w-[90vw] mt-10  pl-8 m-auto   flex gap-5 p-5 bg-white">
        <div className="p-5">
          <img className="w-80" src={state.image} alt="Product_image" />
        </div>
        <div className="space-y-8 p-4">
          <h1 className="text-4xl font-bold">{state.name}</h1>
          <h1 className="text-xl">{state.rating}(rating)</h1>
          <h1 className="text-4xl  text-orange-500">
            Rs.{state.caloriesPerServing}
          </h1>
          <div className="Quantity  flex  gap-x-3 items-center text-xl ">
            <p>Quantity</p>
            <button
              onClick={() => {
                if (counter > 1) {
                  setCounter(counter - 1);
                }
              }}
              className="bg-gray-400  hover:bg-gray-100 w-8 p-1 flex  justify-center items-center h-8"
            >
              <TiMinus />
            </button>
            <p className="bg-gray-100 w-8 p-1 flex  justify-center items-center h-8">
              {counter}
            </p>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
              className="bg-gray-400  hover:bg-gray-100 w-8 p-1 flex  justify-center items-center h-8"
            >
              <TiPlus />
            </button>
          </div>

          <div className="space-x-3">
            <button className="bg-[#2abbe8]  p-3 w-48 text-white rounded-sm ">
              Buy Now
            </button>
            <button onClick={()=>{
             dispatch({
              type:"addToCart",
              payload:state
             })
            }} className="bg-amber-600 p-3 w-48 text-white rounded-sm cursor-pointer ">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <section className="  mt-5  font-serif  w-[90vw] m-auto bg-white p-2">
        <div className="  flex   gap-x-16  items-center  ">
          <div className="p-5">
            <h1 className="text-2xl font-bold">Ingredients</h1>
            <div className="p-5">
              <ol className="list-decimal">
                {ingredients?.map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </ol>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Instructions</h1>
            <div className="p-5">
              <ol className="list-decimal">
                {instructions?.map((instruction, index) => {
                  return <li key={index}>{instruction}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>

        <hr />

        <div className="normal flex gap-x-16 p-5">
          <section className="p-3 font-bold">
            <h1 className="underline">
              Cook Time Minutes:{state.cookTimeMinutes}min.
            </h1>
            <h1 className="underline">Cuisine:{state.cuisine}</h1>
            <h1 className="underline">Difficulty:{state.difficulty}</h1>
            <h1 className="underline">
              Prep Time Minutes:{state.prepTimeMinutes}min.
            </h1>
            <h1 className="underline">Review Count:{state.reviewCount}</h1>
            <h1 className="underline">Servings:{state.servings}</h1>
          </section>

          {/* <div className="border" ></div> */}

          <section>
            <div>
              <h1 className="text-2xl font-bold"> Meal Type</h1>
              <div className="p-3">
                {mealType?.map((mealType, index) => {
                  return <li key={index}>{mealType}</li>;
                })}
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold"> Tags</h1>
              <div className="p-4">
                {tags?.map((tags, index) => {
                  return <li key={index}>{tags}</li>;
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;