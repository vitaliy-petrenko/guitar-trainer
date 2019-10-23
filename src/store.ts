import { applyMiddleware, createStore, Middleware } from 'redux';
import thunk from 'redux-thunk';
import * as reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './store/root';

const
  middlewares: Middleware[] = [thunk],
  isDevMode = process.env.NODE_ENV === 'development';

if (isDevMode) {
  middlewares.push(reduxLogger.createLogger());
}

let enhancer = applyMiddleware(...middlewares);

if (isDevMode) {
  enhancer = composeWithDevTools(enhancer);
}

export default enhancer(createStore)(reducers);
