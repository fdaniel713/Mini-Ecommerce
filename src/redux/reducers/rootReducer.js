import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { productsReducer } from "./products/productReducer";

const initialState={}

 const rootReducer = (state = initialState, action)  =>{
  return state;
}
export default combineReducers({
    root: rootReducer,
    productsReducer: productsReducer,
    cartReducer: cartReducer
})