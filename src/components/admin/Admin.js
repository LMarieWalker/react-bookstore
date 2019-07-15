import React, { Component } from 'react';
import Header from '../nav/Header';
import BookList from './BookList';
import AddNewBook from './AddNewBook';
import Footer from '../nav/Footer';

class Admin extends Component {
  render () {
    return (
      <div>
        <Header togglePageHandler={this.props.togglePageHandler}/>

        <AddNewBook
          createBook={this.props.createBook}
        />

        <BookList
          books={this.props.books}
          deleteBook={this.props.deleteBook}
          editBook={this.props.editBook}
        />

        <Footer />
      </div>
    );
  };
};

export default Admin;
