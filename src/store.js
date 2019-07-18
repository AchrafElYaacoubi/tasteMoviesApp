import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { movieReducer } from './redux/movies/reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const middleware = [thunk];

const allReducers = combineReducers(
  {
    movie : movieReducer,
  }
)


const store = createStore(
  allReducers,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store