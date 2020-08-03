import axios from "axios";

export const getProducts = () => {
  return (dispatch, getState) => {
    // make async call to database
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const dataPosts = res.data.slice(0, 10);
      dispatch({ type: "GET_PRODUCTS", posts: dataPosts });
    });
  };
};
