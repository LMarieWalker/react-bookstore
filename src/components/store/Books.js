import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
  render () {
    let cartStyle = {
      backgroundColor: '#C6A3A8',
      padding: '20px',
      borderRadius: '10px',
      color: '#483C3E',
      margin: '0 20px 20px 20px',
    };

    return (
      <div style={cartStyle}>
        <h3>Store Books</h3>
        <Book
          addToCart={this.props.addToCart}
          sortList={this.props.sortList}
        />
      </div>
    );
  };
};

export default Books;
