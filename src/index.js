import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import loginReducer from './store/reducers/login';
import dashboardReducer from './store/reducers/dashboard';
import jobsReducer from './store/reducers/search';
import profileReducer from './store/reducers/profile';
import resumeReducer from './store/reducers/resume';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  login:loginReducer,
  dashboard:dashboardReducer,
  search:jobsReducer,
  profile:profileReducer,
  resume:resumeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
