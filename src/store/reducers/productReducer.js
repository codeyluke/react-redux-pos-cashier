const initState = {
  products: {
    3: { productName: "bubble tea", price: 780, categoryId: 1 },
    4: { productName: "purple tea", price: 1000, categoryId: 2 },
  },
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default productReducer;
