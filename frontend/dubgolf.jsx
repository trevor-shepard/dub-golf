import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/App'



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  window.getState = store.getState
  window.dispatch = store.dispatch
  
  
  const rootEl = document.getElementById('root');
  
  ReactDOM.render(<App store={store} />, rootEl);
});