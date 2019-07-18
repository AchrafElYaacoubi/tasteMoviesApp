import axiosInstance from "../../helpers/axiosInstance";
import { urlPrepare } from "../../helpers"

export const TYPES = {
  GET_MOVIES: 'GET_MOVIES', 

  MOVIE_INFO: 'MOVIE_INFO',

  FIND_MOVIES: 'FIND_MOVIES',

  SERVER_ERROR: 'SERVER_ERROR'
}

export function getMovies() {
  return function(dispatch) {
    return axiosInstance.get(process.env.REACT_APP_MOVIES)
      .then(res => {
        dispatch({
          type: TYPES.GET_MOVIES,
          payload: res.data
        });
        return res.data
      })
      .catch(err => {
        dispatch({
          type: TYPES.SERVER_ERROR,
          payload: err.message
        });
      });
  };
}

export function getMovieInfo(id) {
  return function(dispatch) {
    return axiosInstance.get(urlPrepare(process.env.REACT_APP_MOVIES_INFO, { id }))
      .then(res => {
        dispatch({
          type: TYPES.MOVIE_INFO,
          payload: res.data
        });
        return res.data
      })
      .catch(err => {
        dispatch({
          type: TYPES.SERVER_ERROR,
          payload: err.message
        });
      });
  };
}

export function findMovies(taste) {
  return function(dispatch) {
    return axiosInstance.get(urlPrepare(process.env.REACT_APP_FIND_MOVIES, { taste }))
      .then(res => {
        dispatch({
          type: TYPES.GET_MOVIES,
          payload: res.data
        });
        return res.data
      })
      .catch(err => {
        dispatch({
          type: TYPES.SERVER_ERROR,
          payload: err.message
        });
      });
  };
}
