const initState = {
  selectedProducts: {
    // 3: { productName: "bubble tea", price: 780, quantity: 1 },
  },
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { selectedProducts: { ...action.products } };
    case "CLEAR_CART":
      return { selectedProducts: { ...action.products } };
    default:
      return state;
  }
};

export default cartReducer;
