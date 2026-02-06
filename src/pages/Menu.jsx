import {  useNavigate } from "react-router-dom";
import useReciepi from "../hooks/useReciepi";

function Menu() {
  const navigate=useNavigate()
  const { isError, isLoading, products } = useReciepi();

  if (isLoading && !isError) {
    return (
      <div className="text-center text-2xl p-10 font-bold">
        Loading...
      </div>
    );
  }

  
  const mexican = products?.filter(item => item.cuisine === "Mexican");
  const italian = products?.filter(item => item.cuisine === "Italian");
  const pakistani = products?.filter(item => item.cuisine === "Pakistani");

  const renderSection = (title, data) => (
    
    data?.length > 0 && (
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#0C6967]">
          {title}
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {data.map(item => (
           
             <div onClick={()=>{
              
              navigate("/productDetail",{state:item})
             }}
              key={item.id}
             
              className="w-52 h-70  bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}w
                className="h-48 w-full object-cover"
              />

              <div className="p-3 text-center">
                <h1 className="font-semibold">{item.name}</h1>
                <p className="text-orange-600 font-bold">
                  Rs. {item.caloriesPerServing}
                </p>
              </div>
            </div>
          
          ))}
        </div>
      </div>
    )
  );

  return (
    <div className="px-20 py-10">
      {renderSection("Mexican Cuisine", mexican)}
      {renderSection("Italian Cuisine", italian)}
      {renderSection("Pakistani Cuisine", pakistani)}
    </div>
  );
}

export default Menu;
