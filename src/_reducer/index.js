import { fromJS } from "immutable";
//import { combineReducers } from 'redux-immutable';
import { combineReducers } from "redux";
import searchResultReducer from "../modules/SearchResult/ducks/reducer";
import operationReducer from "../modules/SearchResult/ducks/reducer";

const rootReducer = combineReducers({
  searchResultReducer,
  operationReducer
});

export default rootReducer;
