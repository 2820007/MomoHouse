import { useNavigate } from "react-router-dom";
import useReciepi from "../hooks/useReciepi";

function Menu() {
  const navigate = useNavigate();
  const { isError, isLoading, products } = useReciepi();

  if (isLoading && !isError) {
    return (
      <div className="text-center text-2xl p-10 font-bold">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600 text-xl p-10 font-bold">
        Something went wrong...
      </div>
    );
  }

  const mexican = products?.filter(item => item.cuisine === "Mexican");
  const italian = products?.filter(item => item.cuisine === "Italian");
  const pakistani = products?.filter(item => item.cuisine === "Pakistani");

  const renderSection = (title, data) =>
    data?.length > 0 && (
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#0C6967]">
          {title}
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {data.map(item => (
            <div
              onClick={() => {
                navigate("/productDetail", { state: item });
              }}
              key={item.id}
              className="w-full max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4 text-center">
                <h1 className="font-semibold text-lg">
                  {item.name}
                </h1>
                <p className="text-orange-600 font-bold mt-2">
                  Rs. {item.caloriesPerServing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-10">
      {renderSection("Mexican Cuisine", mexican)}
      {renderSection("Italian Cuisine", italian)}
      {renderSection("Pakistani Cuisine", pakistani)}
    </div>
  );
}

export default Menu;
