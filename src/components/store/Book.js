import React, { Component } from 'react';
import AddToCartBtn from './AddToCartBtn';
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

class Book extends Component {

  render () {




    let books = this.props.sortList();

    let storeBooks = books.map( book => {
      let price = parseInt(book.price);
      console.log('price: ', price);

        if (!book.inCart) {
          return (
            <div key={book.id} >

              <Card>
                <CardHeader tag="h3">{book.title}</CardHeader>
                <CardBody>
                  <CardTitle>Author: {book.author}</CardTitle>
                  <CardText>{book.description}</CardText>
                  <AddToCartBtn addToCart={this.props.addToCart} id={book.id} />
                </CardBody>
                <CardFooter className="text-muted">Id: {book.id} | Pages: {book.pages} | Price: ${Number(book.price).toFixed(2)}
                </CardFooter>
              </Card>
              <br />





            </div>
          )
        }

        return null;
    });

    return (
      <div>
        {storeBooks}
      </div>
    );
  };
};

export default Book;


// <span style={divStyle}>
//   <p style={pStyle}>
//     Title: {book.title}<br/ >
//     Author: {book.author}<br/ >
//   </p>
//
//   <div className='d-flex justify-content-between align-center'>
//     <p>
//       Price: ${book.price.toFixed(2)}<br/ >
//       Pages: {book.pages}<br/ >
//       Id: {book.id}<br/ >
//     </p>
//     <AddToCartBtn addToCart={this.props.addToCart} id={book.id} />
//   </div>
// </span>
