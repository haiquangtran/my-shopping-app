import React from 'react';
import reactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
