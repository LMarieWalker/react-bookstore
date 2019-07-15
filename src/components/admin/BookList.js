import React, { Component } from 'react';
import Book from './Book';
import { CardColumns, Jumbotron, Container } from 'reactstrap';

class BookList extends Component {
  render () {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1>Book Inventory</h1>

            <CardColumns>
              <Book
                books={this.props.books}
                deleteBook={this.props.deleteBook}
                editBook={this.props.editBook}
              />
            </CardColumns>
          </Container>
        </Jumbotron>

      </div>
    );
  };
};

export default BookList;
