import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const LOGIN = 'LOGIN';
export const LOGINSUCCESS = 'LOGINSUCCESS';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN });
  axios.post(`http://localhost:5000/api/login`, credentials).then(res => {
    dispatch({
      type: LOGINSUCCESS,
      payload: res.data.payload
    });
  });
};

export function fetchData(token) {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`http://localhost:5000/api/friends/`, {
        headers: { authorization: token }
      })

      .then(res => {
        console.log(res.data);
        dispatch({
          type: SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: FAILURE, payload: 'Let the Swarts be with you' });
      });
  };
}
