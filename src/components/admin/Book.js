import React, { Component } from 'react';
import EditBookBtn from './EditBookBtn';
import DeleteBookBtn from './DeleteBookBtn';
import { Card, CardTitle, CardText } from 'reactstrap';

class Book extends Component {

  render () {

    let bookList = this.props.books.map( book => {
      return (
        <div key={book.id}>

          <Card body inverse color="info">
            <CardTitle>Book Title: {book.title}</CardTitle>
            <CardText>Description: {book.description}</CardText>

            <EditBookBtn
              color="secondary"
              editBook={this.props.editBook}
              books={this.props.books}
              id={book.id}
            />

            <DeleteBookBtn
              color="secondary"
              deleteBook={this.props.deleteBook}
              id={book.id}
            />

          </Card>

        </div>
      )
    });

    return (
      <div>
        {bookList}
      </div>
    );
  };
};

export default Book;
