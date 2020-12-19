import axios from 'axios';
import { API_URL } from '../../const';

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCES = 'GET_CATEGORIES_SUCCES';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

export const getCategories = () => {
  return dispatch => {
    dispatch({
      type: GET_CATEGORIES_REQUEST  
    })

    axios.get(`${API_URL}/categories`).then(response => {
      dispatch({
        type: GET_CATEGORIES_SUCCES,
        payload: response.data.data.items
      })
    }).catch(error => {
      console.warn(error);
      dispatch({
        type: GET_CATEGORIES_FAIL,
        payload: error
      })
    })
  }
}