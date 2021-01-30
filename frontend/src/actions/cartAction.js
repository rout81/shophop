import { CART_ADD_ITEM } from "../constants/cartConstants";
import store from "../store";

export const addToCart = (id, qty) => async (dispatch) => {
  const response = await fetch(`/api/products/${id}`);
  const data = await response.json();

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().cart.cartItems)
  );
};
