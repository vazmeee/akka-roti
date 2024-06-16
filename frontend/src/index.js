import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SuperTokens from "supertokens-auth-react";
import { SuperTokensConfig } from './supertokensConfig';
import './SupertokensCustom.css'; // Import the custom CSS

SuperTokens.init(SuperTokensConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
