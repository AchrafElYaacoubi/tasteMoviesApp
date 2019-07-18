import { TYPES } from "./actions";

let initState = {
  movies : [],
  movie: {},
  errors:{}
};

export function movieReducer(state = initState, action) {

  switch (action.type) {

    case TYPES.GET_MOVIES: {
      return {
        ...state,
        movies: action.payload
      };
    }

    case TYPES.MOVIE_INFO: {
      return {
        ...state,
        movie: action.payload
      };
    }
    
    case TYPES.SERVER_ERROR: {
      return {
        ...state,
        errors: action.payload
      }
    }

    default:
      return state;
  }
}