import axios from "axios";
import { API_URL } from "../../const";

export const USER_INFO_REQUEST = "USER_INFO_REQUEST";
export const USER_INFO_SUCCES = "USER_INFO_SUCCES";
export const USER_INFO_FAIL = "USER_INFO_FAIL";

export const getUserInfo = (token) => {
  return (dispatch) => {
    dispatch({
      type: USER_INFO_REQUEST,
    });
    axios
      .get(`${API_URL}/user_info`, { headers: { Authorization: token } })
      .then((response) => {
        dispatch({
          type: USER_INFO_SUCCES,
          payload: response.data.data.item,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_INFO_FAIL,
          payload: error.response.data.message,
        });
      });
  };
};
