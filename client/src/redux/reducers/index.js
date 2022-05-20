import {
  CREATE_ACTIVITY,
  GET_COUNTRIES,
  GET_COUNTRY,
  EMPTY_COUNTRY,
  QUERY_COUNTRIES,
  ORDER,
  ORDER_W_RESET,
} from "../actions";

import orderOrder from "../../Functions/oderOrder";

const initialState = {
  countries: [],
  filterCountries: [],
  country: {},
  activity: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        filterCountries: payload,
      };

    case GET_COUNTRY:
      return {
        ...state,
        country: payload,
      };

      case EMPTY_COUNTRY:
        return {
          ...state,
          country: {}
        };

    case QUERY_COUNTRIES:
      return {
        ...state,
        filterCountries: payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: payload,
      };

    case ORDER:
      let newOrder = [...state.filterCountries];
      newOrder = orderOrder(newOrder, payload);
      return {
        ...state,
        filterCountries: [...newOrder],
      };

    case ORDER_W_RESET:
      let nwOrder = [...state.countries];
      if(payload !== "DEFAULT"){
        nwOrder = orderOrder(nwOrder, payload);
      }
      return {
        ...state,
        filterCountries: [...nwOrder],
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
