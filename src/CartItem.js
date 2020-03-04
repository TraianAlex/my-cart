import React from 'react';

export default class CartItem extends React.Component {
  render() {
    return <li className="cart-item">
      <h3>{this.props.item.name} ({this.props.item.quantity})</h3>
    </li>;
  }
}