import {
  CREATE_ACTIVITY,
  GET_COUNTRIES,
  GET_COUNTRY,
  EMPTY_COUNTRY,
  QUERY_COUNTRIES,
  ORDER,
  ORDER_CONTINENT,
  ORDER_SEASON,
  DEFAULT_VALUES,
} from "../actions";

import orderOrder from "../../Functions/oderOrder";
import seasonOrder from "../../Functions/seasonOrder";

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
        country: {},
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
      if (payload === "") {
        return {
          ...state,
          filterCountries: [...state.filterCountries],
        };
      }
      return {
        ...state,
        filterCountries: [...newOrder],
      };

    case ORDER_CONTINENT:
      let continents = [...state.countries];
      continents = orderOrder(continents, payload);
      if (payload === "") {
        return {
          ...state,
          filterCountries: [...state.filterCountries],
        };
      }
      return {
        ...state,
        filterCountries: [...continents],
      };

    case ORDER_SEASON:
      let season = [...state.countries];
      season = seasonOrder(season, payload)
      if (payload === "") {
        return {
          ...state,
          filterCountries: [...state.filterCountries],
        };
      }
      return{
        ...state,
        filterCountries: [...season],
      }

    case DEFAULT_VALUES:
      return {
        ...state,
        filterCountries: [...state.countries],
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
