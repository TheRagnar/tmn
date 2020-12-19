import { 
  GET_BANNER_REQUEST,
  GET_BANNER_SUCCES,
  GET_BANNER_FAIL
} from '../actions/banners';

const initState = {
  data: [],
  isFetching: false,
  error: '',
}

const banners = (state = initState, action) => {
  switch (action.type) {
    case GET_BANNER_REQUEST: {
      return {
        ...state,
        isFetching: true,
        data: [],
        error: ''
      }
    }
    case GET_BANNER_SUCCES: {
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    }
    case GET_BANNER_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      }
    }
  }

  return state;
}

export default banners;