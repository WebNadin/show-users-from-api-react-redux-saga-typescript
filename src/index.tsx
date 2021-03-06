import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./redux/rootReducer";
import {sagaWatcher} from "./redux/sagas";
import './index.css';
import App from './App';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(
  saga
))

saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
