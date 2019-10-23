import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/root';

const
  middlewares = [logger, thunk],
  isDevMode = process.env.NODE_ENV === 'development';

if (isDevMode) {
  middlewares.push(logger);
}

let enhancer = applyMiddleware(...middlewares);

if (isDevMode) {
  enhancer = composeWithDevTools(enhancer);
}

export default enhancer(createStore)(reducers);
