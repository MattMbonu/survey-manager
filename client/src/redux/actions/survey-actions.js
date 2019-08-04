import { FETCH_USER, FETCH_SURVEYS, DELETE_SURVEY } from "./types";
import axios from "axios";

export const submitSurvey = (formBody, history) => async dispatch => {
  try {
    const res = await axios.post("/api/survey", formBody);
    history.push("/dashboard");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSurvey = id => async dispatch => {
  try {
    await axios.delete(`/api/survey/${id}`);

    dispatch({ type: DELETE_SURVEY, payload: id });
  } catch (error) {
    alert("Sorry Something Went Wrong");
  }
};

export const fetchSurveys = () => async dispatch => {
  try {
    const res = await axios.get("/api/survey");

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  } catch (error) {
    alert("Sorry Something Went Wrong");
  }
};
