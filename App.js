import React from 'react';
import Navigation from './Navigation';
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />      
    </Provider>

  );
}


