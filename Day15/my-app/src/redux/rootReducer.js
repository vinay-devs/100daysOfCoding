import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./MovieReducer"
const rootReducer = combineReducers({
    movies:movieReducer
 })

 export default rootReducer;