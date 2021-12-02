import { combineReducers } from "redux";
import addReducer from "./addReducer";


const rootReducer = combineReducers(
{
         allposts: addReducer
         });

export default rootReducer;