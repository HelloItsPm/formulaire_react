import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store'; // Importation du store
import App from './App';

// Créez un conteneur pour votre application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render votre application à l'intérieur du Provider Redux
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
