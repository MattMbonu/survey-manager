import { FETCH_USER } from "../actions/types";
const initialState = {
  user: null
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        user: payload || false
      };
    default:
      return state;
  }
};
