import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
  appName: 'conduit',
  articles: null,
  products: null,
};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
    case 'PRODUCTS_LOADED':
      return { ...state, products: action.payload };
      default:
      return state;
  }
};

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;