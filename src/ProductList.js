import React from 'react';
import './ProductList.css';
import Product from './Product';

export default class ProductList extends React.Component {
  render() {
    const products = this.props.items.map(product => (
      <Product
        key={product.code}
        item={product}
        addToCartHandler={this.props.addToCartHandler}
      />
    ));

    return <ul>{products}</ul>;
  }
}
