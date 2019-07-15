import React, { Component } from 'react';
import { Button } from 'reactstrap';

class AddToCartBtn extends Component {
  render () {

    return (
      <div className='d-flex justify-content-end'>

        <Button
          color='success'
          onClick={(e) => this.props.addToCart(this.props.id, e)}
        >
          Add To Cart
        </Button>

      </div>
    );
  };
};

export default AddToCartBtn;
