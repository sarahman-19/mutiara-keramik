import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/pages/App';
import {firebaseApp} from './config/Firebase';

console.log('firebase config:' , firebaseApp)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);