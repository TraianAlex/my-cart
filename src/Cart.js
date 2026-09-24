import React from 'react';
import CartItemList from './CartItemList';

function buildCartItems(items) {
  const newCartItemList = [];

  for (const item of items) {
    const foundItem = newCartItemList.find(x => x.code === item.code);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      newCartItemList.push({ ...item, quantity: 1 });
    }
  }

  return newCartItemList;
}

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: buildCartItems(props.items || []) };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextItems = nextProps.items || [];
    const prevItems = prevState._itemsRef;

    if (nextItems === prevItems) {
      return null;
    }

    return {
      cartItems: buildCartItems(nextItems),
      _itemsRef: nextItems
    };
  }

  render() {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <CartItemList items={this.state.cartItems} />
      </div>
    );
  }
}
