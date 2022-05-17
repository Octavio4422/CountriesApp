import { CREATE_ACTIVITY, GET_COUNTRIES, GET_COUNTRY, QUERY_COUNTRIES } from "../actions";

const initialState = {
  countries: [],
  country:{},
  activity: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: payload,
      };
    case QUERY_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
