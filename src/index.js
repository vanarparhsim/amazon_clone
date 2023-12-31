import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './stateProvider';
import reducer,{ initialState } from './reducer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>
  
);


