import { 
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCES,
  GET_CATEGORIES_FAIL
} from '../actions/categories';

const initState = {
  data: [],
  isFetching: false,
  error: '',
}

const banners = (state = initState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST: {
      return {
        ...state,
        isFetching: true,
        data: [],
        error: ''
      }
    }
    case GET_CATEGORIES_SUCCES: {
      return {  
        ...state,
        isFetching: false,
        data: action.payload
      }
    }
    case GET_CATEGORIES_FAIL: {
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