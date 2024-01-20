import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/Store/Store.jsx'; // Assurez-vous que ce chemin est correct
import App from './App.jsx';
import './style/main.scss';

ReactDOM.render(
  <Provider store={store}>
   
      <App />
   
  </Provider>,
  document.getElementById('root')
);
