import RegNoReducer from "./RegNoReducer";
import vehickeDetails from "./vahicleDetails";
import contactDetails from "./contactDetails";
import retriveEvaluation from "./RetrieEvaluation";
import Changeappointment from "./Changeappointment";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  RegNoReducer,
  vehickeDetails,
  contactDetails,
  retriveEvaluation,
  Changeappointment,
});
export default RootReducer;
