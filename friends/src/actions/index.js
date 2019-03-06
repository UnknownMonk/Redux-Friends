import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const LOGIN = 'LOGIN';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN });
  axios.post(`http://localhost:5000/api/login`, credentials).then(res => {
    dispatch({
      type: SUCCESS,
      payload: res.data.payload
    });
  });
};
