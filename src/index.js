import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/pages/App';
import { Provider} from "react-redux";
import Store from './config/Redux/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);