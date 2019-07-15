import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RemoveFromCartBtn extends Component {
  render () {

    return (
      <div className='d-flex justify-content-end'>
        <Button
          color='success'
          onClick={(e) => this.props.removeFromCart(this.props.id, e)}
        >
          Remove From Cart
        </Button>
      </div>
    );
  };
};

export default RemoveFromCartBtn;
