import {GET_DATA, SET_STYLE, SET_SIZE, SET_MILK, SET_SUGAR} from './actions';

const initialState = {
  data: [],
  style: '',
  size: '',
  milk: '',
  sugar: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {...state, data: action.payload};
    case SET_STYLE:
      return {...state, style: action.payload};
    case SET_SIZE:
      return {...state, size: action.payload};
    case SET_MILK:
      return {...state, milk: action.payload};
    case SET_SUGAR:
      return {...state, sugar: action.payload};
    default:
      return state;
  }
}

export default userReducer;
