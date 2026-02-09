import { createContext, useEffect, useReducer } from "react";
import { Bounce, toast } from "react-toastify";
export const CartContext = createContext();
const getProduct = () => {
  let res = localStorage.getItem("cart");
  return res ? JSON.parse(res) : [];
};
const initialState = {
  cartItems: getProduct(),
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      const isExist = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExist) {
        toast.info("Product is already in  cart!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return state;
      } else {
        const newObj = { ...action.payload, qty: 1 };
        const newCartItem = [...state.cartItems, newObj];
        toast.success("Product is added to cart!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        return {
          cartItems: newCartItem,
        };
      }
    }
    case "increment": {
      const newCartItem = state.cartItems.map((item) => {
        return item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
      return {
        cartItems: newCartItem,
      };
    }
    case "decrement": {
      const newCartItem = state.cartItems.map((item) => {
        return item.id === action.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });
      return {
        cartItems: newCartItem,
      };
    }
    case "delete": {
      const newCartItem = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });

      toast.info("Product is deleted!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return {
        cartItems: newCartItem,
      };
    }
    case "clearCart": {
      return {
        cartItems: [],
      };
    }

    case "default": {
      return state;
    }
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};