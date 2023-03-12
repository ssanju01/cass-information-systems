import { combineReducers } from "redux";
import global from "./global/reducers";
import quotes from "./quotes/reducers";
import shipper from './shipper/reducers';

export default combineReducers({ global, quotes, shipper});
