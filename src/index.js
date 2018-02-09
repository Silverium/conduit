import ReactDOM from 'react-dom';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import App from './components/App';
import { Provider } from 'react-redux';
import { promiseMiddleware } from './middleware';

const defaultState = { appName: 'conduit', articles: null };
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, checked: !state.checked };

    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };

    default:
      return state;
  }
}
const store = createStore(reducer, applyMiddleware(promiseMiddleware));


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
