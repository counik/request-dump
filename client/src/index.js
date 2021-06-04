import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './lib/Store';
import { Provider } from 'react-redux';
import './tailwind.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
