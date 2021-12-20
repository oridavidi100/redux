import React from 'react';
import './App.css';
import Cart from './components/cart';
import Sales from './components/sales';

function App() {
  return (
    <div id='shopping'>
      <Sales />
      <Cart />
    </div>
  );
}

export default App;
