import { FETCH_USER } from "./types";
import axios from "axios";

export const handlePaymentToken = token => async dispatch => {
  try {
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {}
};
