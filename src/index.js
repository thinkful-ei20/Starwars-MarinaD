import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CharacterSearch from './components/character-search';
import store from './store';
import './index.css';
import { searchCharacters } from './actions';

store.dispatch(searchCharacters('Luke'));

ReactDOM.render(
  <Provider store={store}>
    <CharacterSearch />
  </Provider>,
  document.getElementById('root')
);
