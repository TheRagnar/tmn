import { 
  ADD_TOVAR,
  REMOVE_TOVAR,
  EDIT_TOVAR,
  CLEAR_TOVAR
} from '../actions/card';

const initState = {
  data: [],
}

const banners = (state = initState, action) => {
  switch (action.type) {
    case ADD_TOVAR: {
      return {
        data: [...state.data, action.payload],
      }
    }
    case REMOVE_TOVAR: {
      return {  
        data: action.payload
      }
    }
    case EDIT_TOVAR: {
      return {
        data: action.payload
      }
    }
    case CLEAR_TOVAR: {
      return {
        data: []
      }
    }
  }

  return state;
}

export default banners;