import React, { Component } from 'react';
import RemoveFromCartBtn from './RemoveFromCartBtn';
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';


class Item extends Component {
  render () {

    let books = this.props.sortList();

    let total = 0;

    let cartItem = books.map( book => {
      if (book.inCart) {
        total += Number(book.price);

        return (
          <div key={book.id} >

            <Card>
              <CardHeader tag="h3">{book.title}</CardHeader>
              <CardBody>
                <CardTitle>Author: {book.author}</CardTitle>
                <CardText>{book.description}</CardText>
                <RemoveFromCartBtn removeFromCart={this.props.removeFromCart} id={book.id} />
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
        {cartItem}
        <br />
        <h1>Total: ${Number(total).toFixed(2)}</h1>
      </div>
    );
  };
};

export default Item;



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
//     <RemoveFromCartBtn removeFromCart={this.props.removeFromCart} id={book.id} />
//   </div>
// </span>
