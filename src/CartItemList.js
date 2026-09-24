import React from 'react';
import './CartItemList.css';
import CartItem from './CartItem';

export default class CartItemList extends React.Component {
  render() {
    const items = this.props.items.map(item => (
      <CartItem key={item.code} item={item} />
    ));

    return <ul>{items}</ul>;
  }
}
