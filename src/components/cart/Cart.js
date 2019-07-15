import React, { Component } from 'react';
import Items from './Items';

class Cart extends Component {
  render () {
    let cartStyle = {
      backgroundColor: '#C6A3A8',
      padding: '20px',
      borderRadius: '10px',
      color: '#483C3E',
    };

    return (
      <div style={cartStyle}>
        <h3>Books In My Cart</h3>
        <Items
          sortList={this.props.sortList}
          removeFromCart={this.props.removeFromCart}
          updateTotal={this.updateTotal}
        />
      </div>
    );
  };
};

export default Cart;
