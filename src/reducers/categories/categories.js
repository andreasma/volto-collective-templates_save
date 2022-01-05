import { GET_CATEGORIES } from '~/constants/ActionTypes';

const initialState = {
    loaded: false,
    loading: false,
    error: null,
  };

  
export default function categories(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_CATEGORIES}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${GET_CATEGORIES}_SUCCESS`:
      return {
        ...state,
        ...action.result,
        error: null,
        loaded: true,
        loading: false,
      };
    case `${GET_CATEGORIES}_FAIL`:
      return {
        ...state,
        error: action.error,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
}
