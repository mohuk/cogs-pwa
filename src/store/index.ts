import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../modules';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

export const history = createHistory();

const client: any = axios.create({
  baseURL: 'https://cogs.10pearls.com/cogsapi/api',
  responseType: 'json'
});

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  axiosMiddleware(client),
  routerMiddleware(history),
  logger
];

if (process.env.NODE_ENV === 'development') {
  // const devToolsExtension = window['devToolsExtension'];

  // if (typeof devToolsExtension === 'function') {
  //   enhancers.push(devToolsExtension());
  // }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
