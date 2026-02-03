
import useReciepi from "../hooks/useReciepi";
function Menu() {
  const { isError, isLoading, products } = useReciepi();
  if (!isError && isLoading) {
    return (
      <div className="text-center text-2xl p-10 font-bold">
        Loading.............
      </div>
    );
  }

  return (
    <div>
      {products?.length > 0 ? (
        <div className="flex flex-wrap justify-center  gap-5 px-20  py-10 ">
          {products.map((item) => {
            return (
              <div
                key={item.id}
                className="w-52   shadow-xl  bg-white shadow-gray-200   rounded-2xl flex flex-col"
              >
                <div>
                  <img
                    className=" h-48  rounded-t-2xl w-full"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="p-3">
                  <h1>{item.name}</h1>
                  <h1>Rs.{item.caloriesPerServing}</h1>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Product Not Found.</div>
      )}
    </div>
  );
}

export default Menu;