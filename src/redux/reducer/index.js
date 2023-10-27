import { combineReducers } from "redux"
import Reducer from './userReducer'
import ErrorReducer from "./Errorreducer";
import Productsreducer from "./product-reducer"
import addItems from "./cart-reducer"
const rootreducer=combineReducers({
    Reducer,ErrorReducer,Productsreducer,addItems
 })
 
 export default rootreducer