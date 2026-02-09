import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Success() {
  const [SearchParams] = useSearchParams();
  const navigate=useNavigate()
  let res = SearchParams.get("data");
  res = atob(res);
  res = JSON.parse(res);
//   console.log(res);

const {dispatch}=useContext(CartContext)

useEffect(()=>{
    dispatch({
        type:"clearCart"
    })

},[])




  return (
    <div>
      <div className="w-80 p-8  mt-10 shadow-2xl shadow-gray-500 rounded-xl  space-y-6 m-auto  ">
        <div className="">
          <img
            className="w-full"
            src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"
            alt=""
          />
        </div>
        <div className="text-xl font-serif  ">
          <h1  className="flex justify-between"   >
            <span>Status:</span>
            <span  className="text-sm text-green-500   font-bold  underline"   >{res?.status}</span>
          </h1>
          <h1  className="flex justify-between"   >
            {" "}
            <span>Total Amount </span> <span  className="text-sm text-orange-700   font-bold  underline"   > Rs.{res?.total_amount} </span>{" "}
          </h1>
          <h1  className="flex justify-between"   >
            {" "}
            <span> Transaction Code </span>{" "}
            <span  className="text-sm text-orange-700   font-bold  underline"   > {res?.transaction_code} </span>{" "}
          </h1>
          <div>
            <button 

            onClick={()=>{
                navigate("/menu")
            }}
             className="bg-orange-600 cursor-pointer rounded-4xl hover:bg-orange-800 px-8 py-4 mt-4 w-full text-white">Shop More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;