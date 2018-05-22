import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {characterReducer} from './reducers';

export default createStore(
  characterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
