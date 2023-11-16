import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Global from './Global.css';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global/>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
