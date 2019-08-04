import { FETCH_SURVEYS, DELETE_SURVEY } from "../actions/types";

const initialstate = [];
export default (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SURVEYS:
      return payload;
    case DELETE_SURVEY:
      return state.filter(survey => survey._id !== payload);
    default:
      return state;
  }
};
