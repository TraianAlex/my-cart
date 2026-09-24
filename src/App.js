import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog';
import ShippingMethods from './ShippingMethods';
import { Routes, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Cart App</h1>
          <nav>
            <ul>
              <li><Link to='/'>Catalog</Link></li>
              <li><Link to='/shippingMethods'>Shipping Methods</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/shippingMethods/*' element={<ShippingMethods />} />
        </Routes>
      </div>
    );
  }
}
