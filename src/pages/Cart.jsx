import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { TiMinus, TiPlus } from "react-icons/ti";
function Cart() {
  const navigate=useNavigate()



  const { state, dispatch } = useContext(CartContext);
  const { cartItems } = state;
   const totalItem=cartItems.reduce((acc,item)=>{
  return acc+item.qty

 },0)


 const totalPrize=cartItems.reduce((acc,item)=>{
  return acc+item.qty*item.caloriesPerServing

 },0)

 const shippingFee=100;


  return (
    <main>
      {cartItems?.length > 0 ? (
        <section className=" flex   justify-center  gap-x-5 p-10 ">
          <div className="cart_items  w-[60vw]  space-y-4    ">
            {cartItems.map((item) => {
              return (
                <div key={item.id} className="flex  shadow-2xl rounded-sm  items-center justify-between  px-5 p-2  bg-white ">
                  <div className="1   flex  gap-x-3 items-center  ">
                    <div>
                      <img width={100} src={item.image} alt="" />
                    </div>
                    <div>
                      <h1 className="  w-72 ">{item.name}</h1>
                    </div>
                  </div>
                  <div className="2 ">
                    <h1 className="text-2xl">Rs.{item.caloriesPerServing}</h1>
                    <button 
                     onClick={() => {
                          dispatch({
                            type: "delete",
                            payload: { id: item.id },
                          });
                        }}
                    className="mt-3 cursor-pointer">
                      <MdDelete color="red" size={25} />
                    </button>
                  </div>
                  <div>
                    <div className="Quantity  flex  gap-x-3 items-center text-xl ">
                      <button 
                        onClick={() => {
                          dispatch({
                            type: "decrement",
                            payload: { id: item.id },
                          });
                        }}
                        className="bg-gray-400  cursor-pointer  hover:bg-gray-100 w-8 p-1 flex  justify-center items-center h-8"
                      >
                        <TiMinus />
                      </button>
                      <p className="bg-gray-100 w-8 p-1 flex   justify-center items-center h-8">
                        {item.qty}
                      </p>
                      <button
                         onClick={() => {
                          dispatch({
                            type: "increment",
                            payload: { id: item.id },
                          });
                        }}
                        className="bg-gray-400  cursor-pointer hover:bg-gray-100 w-8 p-1 flex  justify-center items-center h-8"
                      >
                        <TiPlus />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="   space-y-4 p-5 bg-white shadow-2xl rounded-sm  h-82.5 w-[30vw]">
            <h1 className="text-2xl">Order Summary</h1>
            <div className="   flex justify-between  ">
              <h1>Subtotal ({totalItem}) </h1>
              <h1>Rs. {totalPrize}</h1>
            </div>
            <div className="   flex justify-between  ">
              <h1>Shipping Fee</h1>
              <h1> Rs. {shippingFee}</h1>
            </div>
            <div className="space-x-2.5 px-7">
              <input
                type="text"
                className="border-1  outline-none p-2 rounded-2xl"
                placeholder="Enter Voucher Code"
              />
              <button className="bg-blue-500  cursor-pointer text-white w-28 h-10 ">
                APPLY
              </button>
            </div>
            <div className="   flex justify-between  ">
              <h1>Total</h1>
              <h1>Rs. {shippingFee+totalPrize}</h1>
            </div>
            <div>
              <button
              onClick={(()=>{
                navigate("/eshewa",{state:shippingFee+totalPrize})
              })}
               className="bg-orange-500 cursor-pointer  text-white w-full p-3">
                Procced To CheckOut
              </button>
            </div>
          </div>
        </section>
      ) : (
       <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
  
  {/* Icon */}
  <div className="mb-6 w-28 h-28 flex items-center justify-center rounded-full bg-orange-100">
    <span className="text-6xl">🛒</span>
  </div>

 
  <h1 className="text-2xl font-semibold text-gray-800">
    Your cart is empty
  </h1>


  <p className="text-gray-500 mt-2 max-w-md">
    Looks like you haven’t added anything yet.
    Start shopping and fill your cart with something awesome!
  </p>

  
  <NavLink
    to="/menu"
    className="mt-6 inline-block px-8 py-3 bg-orange-500 text-white 
               rounded-xl font-medium shadow-md 
               hover:bg-orange-600 hover:scale-105 
               transition-all duration-300"
  >
    Continue Shopping({totalItem})
  </NavLink>

</div>

      )}
    </main>
  );
}

export default Cart;
