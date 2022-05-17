import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES' ;
export const GET_COUNTRY = 'GET_COUNTRY';
export const QUERY_COUNTRIES = 'QUERY_COUNTRIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';

const env = 'localhost:3001'

export const getCounties = () => dispatch => {
    return axios.get(`http://${env}/countries/`)
    .then((countries) => {
        dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        })
    })
}

export const getCountry = (id) => dispatch => {
    return axios.get(`http://${env}/countries/${id}`)
    .then((country) => {
        dispatch({
            type: GET_COUNTRY,
            payload: country.data
        })
    })
}

export const queryCountries = (query) => dispatch => {
    return axios.get(`http://${env}/countries?name=${query}`)
    .then((countries) => {
        dispatch({
            type: QUERY_COUNTRIES,
            payload: countries.data
        })
    })
}

export function createActivity(values){
    return{
        type: CREATE_ACTIVITY,
        payload:{
            ...values
        }
    }
}