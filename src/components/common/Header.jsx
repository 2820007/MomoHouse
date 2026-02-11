import { NavLink } from "react-router-dom";
import momologo from "../../assets/momologo.png";

import { IoLogoFacebook } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";


function Header() {
  const { state } = useContext(CartContext);
  const { cartItems } = state;
   const totalItem=cartItems.reduce((acc,item)=>{
  return acc+item.qty

 },0)
   const { isLoading, logout, isAuthenticated, user } = useAuth0();
  return (
    <nav className="  border-b border-b-gray-300  bg-white flex  justify-around p-5   items-center  ">
      <NavLink to="/" className="flex items-center  gap-x-3 ">
        <img src={momologo} alt="momo_logo" />
        <h1 className="text-[#0C6967] font-bold text-2xl  ">momos</h1>
      </NavLink>
      <div className="space-x-8   flex items-center ">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services </NavLink>
        <NavLink to="/allergy">Allergy Advice </NavLink>

        <NavLink to="/CartPage" className=" relative ">
          <p
            className="absolute bottom-4 left-4 flex justify-center
           items-center text-sm bg-black rounded-full text-white w-6 h-6"
          >
            {totalItem}
          </p>
          <FaCartPlus size={25} color="red" />
        </NavLink>
      </div>

      <div className="flex items-center   gap-x-7 ">
        <NavLink to="https://www.facebook.com/" target="_blank">
          <IoLogoFacebook size={20} />
        </NavLink>
        <NavLink to="https://www.tiktok.com/en/" target="_blank">
          <FaTiktok size={20} />
        </NavLink>
        <NavLink to="https://www.instagram.com/" target="_blank">
          <FaSquareInstagram size={20} />
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-[#D95103]  py-2 px-5   rounded-3xl text-white   "
        >
          Contact
        </NavLink>
      </div>

      <div className="  group relative  ">
        {!isLoading && isAuthenticated ? (
          <img
            className="w-10 rounded-full"
            src={user?.picture}
            alt="user_image"
          />
        ) : (
          <FaUserCircle size={35} color="green" />
        )}

        <div className=" group-hover:flex font-bold  gap-y-2 bg-gray-400 rounded-sm  flex-col p-5   z-50  absolute   hidden  ">
          {!isLoading && isAuthenticated ? (
            <>
              <NavLink to="/profile" className="hover:underline">
                Profile
              </NavLink>
              <button
                onClick={() => {
                  logout({
                    logoutParams: { returnTo:   "http://localhost:5173/", },
                  });
                }}
                className="p-1 font-bold font-sans hover:bg-orange-800 text-white cursor-pointer  rounded-2xl border bg-orange-500 "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/register" className="hover:underline">
                Register
              </NavLink>
              <NavLink to="/login" className="hover:underline">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );

}

export default Header;
