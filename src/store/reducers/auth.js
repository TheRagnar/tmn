import { 
  AUTH_IN_REQUEST,
  AUTH_IN_SUCCES,
  AUTH_IN_FAIL
} from '../actions/auth';

const initState = {
  authIn: false,
  token: null,
  error: '',
  isFetching: false,
}

const auth = (state = initState, action) => {
  switch (action.type) {
    case AUTH_IN_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    }
    case AUTH_IN_SUCCES: {
      return {
        ...state,
        isFetching: false,
        authIn: true,
        token: action.payload
      }
    }
    case AUTH_IN_FAIL: {
      return {
        ...state,
        isFetching: false,
        authIn: false,
        error: action.payload
      }
    }
  }

  return state;
}

export default auth;