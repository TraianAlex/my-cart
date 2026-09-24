import React from 'react';
import ShippingMethod from './ShippingMethod';
import { Routes, Route, Link } from 'react-router-dom';

function ShippingMethodList() {
  return (
    <ul>
      <li><Link to="/shippingMethods/ECO">Economic delivery</Link></li>
      <li><Link to="/shippingMethods/STD">Standard delivery</Link></li>
      <li><Link to="/shippingMethods/EXP">Express delivery</Link></li>
    </ul>
  );
}

export default class ShippingMethods extends React.Component {
  render() {
    return (
      <Routes>
        <Route index element={<ShippingMethodList />} />
        <Route path=':code' element={<ShippingMethod />} />
      </Routes>
    );
  }
}
