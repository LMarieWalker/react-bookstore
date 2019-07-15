import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Form } from 'reactstrap';

class EditBookBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render () {
    let bookToEdit = this.props.books.filter( book => book.id === this.props.id);

    return (
      <div>
        <Button
          color="secondary"
          onClick={this.toggle}>

            Edit Book with ID: {this.props.id}

        </Button>


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <Form >
            <ModalHeader toggle={this.toggle}>Edit: {bookToEdit[0].title}</ModalHeader>

            <ModalBody>


              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Title</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='text'
                    placeholder={bookToEdit[0].title}
                    name='title'
                    id='title'
                    onChange={this.handleChange}
                    value={this.state.title}
                  />

              </InputGroup>

                <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Subtitle</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='text'
                    placeholder={bookToEdit[0].subtitle}
                  />

              </InputGroup>

                <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Author</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='text'
                    placeholder={bookToEdit[0].author}
                  />

              </InputGroup>

                <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Published</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='date'
                    placeholder={bookToEdit[0].date}
                  />

              </InputGroup>

                <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Publisher</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='text'
                    placeholder={bookToEdit[0].publisher}
                  />

              </InputGroup>

                <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Pages</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='number'
                    placeholder={bookToEdit[0].pages}
                  />

              </InputGroup>

                <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Price</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='number'
                    placeholder={bookToEdit[0].price}
                  />

              </InputGroup>

                <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Description</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='textArea'
                    placeholder={bookToEdit[0].description}
                  />

              </InputGroup>

                <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Website</InputGroupText>
                </InputGroupAddon>

                  <Input
                    type='textArea'
                    placeholder={bookToEdit[0].website}
                  />

              </InputGroup>


                <br />



            </ModalBody>

            <ModalFooter>
              <Button
                color="primary"
                onClick={this.props.editBook}>Do Something
              </Button>

              {' '}

              <Button
                color="secondary"
                onClick={this.toggle}>Cancel
              </Button>

            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  };
};

export default EditBookBtn;
// <Button
//   onClick={(e) => this.props.editBook(this.props.id, e)}
// </Button>
