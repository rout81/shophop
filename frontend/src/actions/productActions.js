import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
} from "../constants/productContacts";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // fetch("/api/products")
    //   .then((response) => response.json())
    //   .then((data) => dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data }))
    //   .then((err) => console.log(err));

    const response = await fetch("/api/products");
    const data = await response.json();
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  // dispatch({ type: PRODUCT_DETAILS_REQUEST });
  // fetch(`/api/products/${id}`)
  //   .then((response) => response.json())
  //   .then((data) => dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data }))
  //   .then((error) =>
  //     dispatch({
  //       type: PRODUCT_DETAILS_FAILED,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     })
  //   );
};
