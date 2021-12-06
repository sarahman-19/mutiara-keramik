import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/pages/App';
import {firebaseApp} from './config/Firebase';
import { Provider} from "react-redux";
import Store from './config/Redux/Store';

console.log('firebase config:' , firebaseApp)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);