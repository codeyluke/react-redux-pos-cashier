export const addToCart = (products) => {
  return (dispatch) => {
    dispatch({ type: "ADD_TO_CART", products });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    const products = {};
    dispatch({ type: "CLEAR_CART", products });
  };
};
