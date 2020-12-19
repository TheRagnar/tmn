import { 
  USER_INFO_REQUEST,
  USER_INFO_SUCCES,
  USER_INFO_FAIL
} from '../actions/userInfo';

const initState = {
  data: {},
  error: '',
  isFetching: false,
}

const userInfo = (state = initState, action) => {
  switch (action.type) {
    case USER_INFO_REQUEST: {
      return {
        ...state,
        data: {},
        isFetching: true,
        error: ''
      }
    }
    case USER_INFO_SUCCES: {
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    }
    case USER_INFO_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    }
  }

  return state;
}

export default userInfo;