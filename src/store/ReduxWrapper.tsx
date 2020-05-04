import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools());

export default ({ element }) => (
  <Provider store={ store }>{ element }</Provider>
);