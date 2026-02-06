import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const getProduct = () => {
  try {
    const res = localStorage.getItem("cart");
    if (!res || res === "undefined") return [];
    return JSON.parse(res);
  } catch {
    return [];
  }
};

const initialState = {
  cartItems: getProduct(),
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      const isExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (isExist) return state;

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, qty: 1 },
        ],
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
