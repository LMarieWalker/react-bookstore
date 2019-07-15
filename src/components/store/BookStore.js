import React, { Component } from 'react';
import Header from '../nav/Header';
import Search from '../search/Search';
import Books from './Books';
import Cart from '../cart/Cart';
import Footer from '../nav/Footer';

class BookStore extends Component {
  render () {
    return (
      <div>
        <Header togglePageHandler={this.props.togglePageHandler} />

        <div className='d-flex-column justify-content-center'>

          <div className='d-flex justify-content-center'>
            <Search
              searchBy={this.props.searchBy}
              updateSearch={this.props.updateSearch}
              searchValue={this.props.searchValue}
              sortByTitleOrAuthor={this.props.sortByTitleOrAuthor}
            />
          </div>

          <div className='d-flex justify-content-around'>
            <div>
              <Books
                sortList={this.props.sortList}
                addToCart={this.props.addToCart}
              />
            </div>

            <div>
              <Cart
                sortList={this.props.sortList}
                removeFromCart={this.props.removeFromCart}
              />
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
};

export default BookStore;
