import {
  SET_OPTIONS_LIST
} from "../actions/productsRequest";

const initState = {
  optionsList: []
};

const productsRequest = (state = initState, action) => {
  switch (action.type) {
    case SET_OPTIONS_LIST: {
      return {
        ...state,
        optionsList: action.payload
      }
    }
  }

  return state;
};

export default productsRequest;
