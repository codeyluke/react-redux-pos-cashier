import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import summaryReducer from "./summaryReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  summary: summaryReducer,
});

export default rootReducer;
