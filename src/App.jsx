import React from 'react';
import './App.css';
import { Benefits } from './components/benefits';
import { NavBar } from './components/navbar';
import { ItemListContainer } from './components/itemListContainer';
import { CartWidget } from './components/cartwidget';

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer />
      <CartWidget/>
      <Benefits />
    </div>
  );
}

export default App;

