import React from 'react';

export default class Product extends React.Component {
  render() {
    return <li>
      <h3>{this.props.item.name}</h3>
      <p>{this.props.item.description}</p>
      <button onClick={() => this.props.addToCartHandler(this.props.item)}>Add to cart</button>
      <hr />
    </li>;
  }
}