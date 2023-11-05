import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import Global from './Global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
