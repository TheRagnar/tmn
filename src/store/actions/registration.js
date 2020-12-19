import axios from 'axios';
import { API_URL } from '../../const';

export const REGISTRATION_IN_REQUEST = 'REGISTRATION_IN_REQUEST';
export const REGISTRATION_IN_SUCCES = 'REGISTRATION_IN_SUCCES';
export const REGISTRATION_IN_FAIL = 'REGISTRATION_IN_FAIL';

export const registration = (phone) => {
  return dispatch => {
    dispatch({
      type: REGISTRATION_IN_REQUEST
    })
    axios.post(`${API_URL}/registration`, {
      phone: phone
    }).then(response => {
      dispatch({
        type: REGISTRATION_IN_SUCCES,
      })
    }).catch((error) => {
      dispatch({
        type: REGISTRATION_IN_FAIL,
        payload: error.response.data.errors.phone[0]
      })
    })
  }
}