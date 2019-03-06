import { ERROR, SUCCESS, LOGINSUCCESS, FETCHING } from '../actions/index';

const initialState = {
  fetchingFriends: false,
  loggedIn: false,
  friends: [],
  error: null,
  token: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGINSUCCESS:
      return {
        ...state,
        FetchingFriends: false,
        loggedIn: true,
        error: null,
        token: action.payload
      };
    case SUCCESS:
      return {
        ...state,

        friends: action.payload
      };
    default:
      return state;
  }
};
