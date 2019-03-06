import { ERROR, SUCCESS, FETCHING } from '../actions/index';

const initialState = {
  fetchingFriends: false,
  loggedIn: false,
  friends: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, FetchingFriends: false, loggedIn: true, error: null };
    default:
      return state;
  }
};
