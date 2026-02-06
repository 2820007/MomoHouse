import { NavLink, useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";

import { useEffect, useState } from "react";
import useReciepi from "../../hooks/useReciepi";
function FilterComponent() {
  const navigate=useNavigate()
  const { isError, isLoading, products } = useReciepi();
  
  const [filter, setFilter] = useState([]);
 

  const filterProduct = (food = "Mexican") => {
    let filterItems = products.filter((item) => {
      return item.cuisine == food;
    });
    setFilter(filterItems);
  };

  useEffect(() => {
    filterProduct();
  }, [products]);

  return (
    <section className="bg-white py-14 flex flex-col justify-center  gap-5 p-3 items-center">
      <div className="text-center  space-y-3  ">
        <h1 className="text-2xl font-bold">
          Our <span className="text-[#D95103]"> Most Popular </span> Recipes
        </h1>
        <p>
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>
      </div>
      <div className="space-x-3">
        <button
          onClick={() => {
            filterProduct("Mexican");
          }}
          className="border rounded-3xl  hover:bg-amber-700 hover:text-white   w-20 p-2 cursor-pointer"
        >
          Mexican
        </button>
        <button
          onClick={() => {
            filterProduct("Pakistani");
          }}
          className="border rounded-3xl  hover:bg-amber-700 hover:text-white   w-20 p-2 cursor-pointer"
        >
          Pakistani
        </button>
        <button
          onClick={() => {
            filterProduct("Italian");
          }}
          className="border rounded-3xl  hover:bg-amber-700 hover:text-white   w-20 p-2 cursor-pointer"
        >
          Italian
        </button>
      </div>
      <div>
        {!isError && isLoading ? (
          <div>Loading.......</div>
        ) : (
          <div>
            {filter?.length > 0 && (
              <div   className="flex flex-wrap gap-5" >
                {filter?.map((item) => {
                  return (
                   
  <div key={item.id} 
  onClick={()=>{
              
              navigate("/productDetail",{state:item})
             }}
  
  className="w-48 h-72  shadow-xl shadow-gray-200 rounded-2xl 
                  flex flex-col overflow-hidden cursor-pointer">
    
    {/* Image */}
    <div className="h-48 w-full">
      <img
        className="h-full w-full object-cover"
        src={item.image}
        alt={item.name}
      />
    </div>

    {/* Content */}
    <div className="p-3 flex flex-col justify-between flex-1 text-center">
      <h1 className="font-semibold line-clamp-2">{item.name}</h1>
      <h1 className="text-orange-600 font-bold">
        Rs. {item.caloriesPerServing}
      </h1>
    </div>
  </div>


                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <NavLink
          to="/menu"
          className="bg-[#0C6967] p-3  py-4 flex justify-center items-center gap-2 w-52 text-white rounded-4xl"
        >
          Explore Our Menu
          <CgArrowRight />
        </NavLink>
      </div>
    </section>
  );
}

export default FilterComponent;