import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {
  render () {
    return (
      <div>
        <Item
          sortList={this.props.sortList}
          removeFromCart={this.props.removeFromCart}
          updateTotal={this.props.updateTotal}
        />
      </div>
    );
  };
};

export default Items;
