import {combineReducers, createStore} from "redux";
import mainReducer from "./reducers/MainReducer";
import {composeWithDevTools} from "redux-devtools-extension/index";


const reducers = combineReducers({
  main: mainReducer
})


const store = createStore(reducers, composeWithDevTools());


export default store;
