import axios from 'axios';
import { API_URL, API_CLIENT_ID, API_CLIENT_SECRET, API_SCOPE, API_GRANT_TYPE } from '../../const';

export const AUTH_IN_REQUEST = 'AUTH_IN_REQUEST';
export const AUTH_IN_SUCCES = 'AUTH_IN_SUCCES';
export const AUTH_IN_FAIL = 'AUTH_IN_FAIL';

export const authIn = (phone, password) => {
  return dispatch => {
    dispatch({
      type: AUTH_IN_REQUEST
    })
    axios.post(`${API_URL}/oauth/token`, {
      grant_type: API_GRANT_TYPE,
      username: phone,
      password: password,
      client_id: API_CLIENT_ID,
      client_secret: API_CLIENT_SECRET,
      scope: API_SCOPE
    }).then(response => {
      dispatch({
        type: AUTH_IN_SUCCES,
        payload: `${response.data.token_type} ${response.data.access_token}`
      })
    }).catch(error => {
      dispatch({
        type: AUTH_IN_FAIL,
        payload: error.response.data.message
      })
    })
  }
}