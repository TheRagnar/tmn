import axios from 'axios';
import { API_URL } from '../../const';

export const GET_BANNER_REQUEST = 'GET_BANNER_REQUEST';
export const GET_BANNER_SUCCES = 'GET_BANNER_SUCCES';
export const GET_BANNER_FAIL = 'GET_BANNER_FAIL';

export const getBanners = () => {
  return dispatch => {
    dispatch({
      type: GET_BANNER_REQUEST  
    })

    axios.get(`${API_URL}/banners`).then(response => {
      dispatch({
        type: GET_BANNER_SUCCES,
        payload: response.data.data.items
      })
    }).catch(error => {
      console.warn(error);
      dispatch({
        type: GET_BANNER_FAIL,
        payload: error
      })
    })
  }
}