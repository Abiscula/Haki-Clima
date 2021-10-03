import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ClimateProvider } from './Providers/p-climate';
import { ScreenProvider } from './Providers/p-screen';

ReactDOM.render(
  <React.StrictMode>
    <ClimateProvider>
      <ScreenProvider>
        <App />
      </ScreenProvider>
    </ClimateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
