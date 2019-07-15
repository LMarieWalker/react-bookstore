import React, { Component } from 'react';
import { Button } from 'reactstrap';

class DeleteBookBtn extends Component {
  render () {
    return (
      <div>
        <Button
          onClick={(e) => this.props.deleteBook(this.props.id, e)}
        >
          Delete Book
        </Button>
      </div>
    );
  };
};

export default DeleteBookBtn;
