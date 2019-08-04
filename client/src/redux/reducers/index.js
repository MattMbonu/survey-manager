import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import auth from "./auth-reducer";
import surveys from "./survey-reducer";

export default combineReducers({
  auth,
  surveys,
  form: reduxForm
});
