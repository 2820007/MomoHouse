import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { TiMinus, TiPlus } from "react-icons/ti";
function Cart() {
  const { state } = useContext(CartContext);
  const { cartItems } = state;
  return (
    <main>
      {cartItems?.length > 0 ? (
        <section className=" flex   justify-center  gap-x-5 p-10 ">
          <div className="cart_items  w-[60vw]  space-y-4    ">
            {cartItems.map((item) => {
              return (
                <div className="flex  shadow-2xl rounded-sm  items-center justify-between  px-5 p-2  bg-white ">
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
                    <button className="mt-3">
                      <MdDelete color="red" size={25} />
                    </button>
                  </div>
                  <div>
                    <div className="Quantity  flex  gap-x-3 items-center text-xl ">
                      <button
                        onClick={() => {}}
                        className="bg-gray-400  hover:bg-gray-100 w-8 p-1 flex  justify-center items-center h-8"
                      >
                        <TiMinus />
                      </button>
                      <p className="bg-gray-100 w-8 p-1 flex  justify-center items-center h-8">
                        {item.qty}
                      </p>
                      <button
                        onClick={() => {}}
                        className="bg-gray-400  hover:bg-gray-100 w-8 p-1 flex  justify-center items-center h-8"
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
            <h1  className="text-2xl" >Order Summary</h1>
            <div  className="   flex justify-between  "    >
              <h1>Subtotal (0 )</h1>
              <h1>Rs. 0</h1>
            </div>
            <div  className="   flex justify-between  "    >
              <h1>Shipping Fee</h1>
              <h1> Rs. 0</h1>
            </div>
            <div   className="space-x-2.5 px-7" >
              <input type="text"  className="border-1  outline-none p-2 rounded-2xl"  placeholder="Enter Voucher Code" />
              <button  className="bg-blue-500 text-white w-28 h-10 " >APPLY</button>
            </div>
            <div  className="   flex justify-between  "    >
              <h1>Total</h1>
              <h1>Rs. 0</h1>
            </div>
            <div>
              <button  className="bg-orange-500 text-white w-full p-3" >Procced To CheckOut</button>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <h1>There are no items in this cart</h1>
          <NavLink>Continue Shopping</NavLink>
        </div>
      )}
    </main>
  );
}

export default Cart;