import RegNoReducer from "./RegNoReducer";
import vehickeDetails from "./vahicleDetails";
import contactDetails from "./contactDetails";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  RegNoReducer,
  vehickeDetails,
  contactDetails,
});
export default RootReducer;
