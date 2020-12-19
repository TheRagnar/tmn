import {
  REGISTRATION_IN_REQUEST,
  REGISTRATION_IN_SUCCES,
  REGISTRATION_IN_FAIL,
} from "../actions/registration";

const initState = {
  isFetching: false,
  error: "",
  isSucces: false,
};

const registration = (state = initState, action) => {
  switch (action.type) {
    case REGISTRATION_IN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    }
    case REGISTRATION_IN_SUCCES: {
      return {
        ...state,
        isFetching: false,
        isSucces: true
      };
    }
    case REGISTRATION_IN_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
  }

  return state;
};

export default registration;
