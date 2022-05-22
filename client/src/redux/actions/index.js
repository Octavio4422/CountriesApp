import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const QUERY_COUNTRIES = "QUERY_COUNTRIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const ORDER = "ORDER";
export const ORDER_CONTINENT = "ORDER_CONTINENT";
export const ORDER_SEASON = "ORDER_SEASON";
export const EMPTY_COUNTRY = "EMPTY_COUNTRY";
export const DEFAULT_VALUES = "DEFAULT_VALUES";

const env = "localhost:3001";

export const getCounties = () => (dispatch) => {
  return axios.get(`http://${env}/countries/`).then((countries) => {
    dispatch({
      type: GET_COUNTRIES,
      payload: countries.data,
    });
  });
};

export const getCountry = (id) => (dispatch) => {
  return axios.get(`http://${env}/countries/${id}`).then((country) => {
    dispatch({
      type: GET_COUNTRY,
      payload: country.data,
    });
  });
};

export const emptyCountry = () => {
  return {
    type: EMPTY_COUNTRY,
  };
};

export const queryCountries = (query) => (dispatch) => {
  return axios
    .get(`http://${env}/countries?name=${query}`)
    .then((countries) => {
      dispatch({
        type: QUERY_COUNTRIES,
        payload: countries.data,
      });
    });
};

export function createActivity(values) {
  return {
    type: CREATE_ACTIVITY,
    payload: {
      ...values,
    },
  };
}

export function order(value) {
  return {
    type: ORDER,
    payload: value,
  };
}

export function orderContinent(value) {
  return {
    type: ORDER_CONTINENT,
    payload: value,
  };
}

export function orderSeason(value) {
  return {
    type: ORDER_SEASON,
    payload: value,
  };
}

export function defaultValues() {
  return {
    type: DEFAULT_VALUES,
  };
}
