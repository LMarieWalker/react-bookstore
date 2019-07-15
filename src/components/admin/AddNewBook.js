import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';

class AddNewBook extends Component {

  state = {
    title: '',
    subtitle: '',
    author: '',
    published: '',
    publisher: '',
    pages: 0,
    description: '',
    website: '',
    inCart: false,
    price: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createBook(this.state);
  }

  render () {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1>Create New Book</h1>

            <Form onSubmit={this.handleSubmit}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='title'>Title</Label>
                    <Input
                      type='text'
                      name='title'
                      id='title'
                      placeholder='Title'
                      onChange={this.handleChange}
                      value={this.state.title}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for='subtitle'>SubTitle</Label>
                    <Input
                      type='text'
                      name='subtitle'
                      id='subtitle'
                      placeholder='SubTitle'
                      onChange={this.handleChange}
                      value={this.state.subtitle}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='author'>Author</Label>
                    <Input
                      type='text'
                      name='author'
                      id='author'
                      placeholder='Author'
                      onChange={this.handleChange}
                      value={this.state.author}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for='publisher'>Publisher</Label>
                    <Input
                      type='text'
                      name='publisher'
                      id='publisher'
                      placeholder='Publisher'
                      onChange={this.handleChange}
                      value={this.state.publisher}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='published'>Published</Label>
                    <Input
                      type='date'
                      name='published'
                      id='published'
                      placeholder='Published'
                      onChange={this.handleChange}
                      value={this.state.published}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for='pages'>Pages</Label>
                    <Input
                      type='number'
                      name='pages'
                      id='pages'
                      placeholder='Pages'
                      onChange={this.handleChange}
                      value={this.state.pages}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for='price'>Price</Label>
                    <Input
                      type='number'
                      name='price'
                      id='price'
                      onChange={this.handleChange}
                      value={this.state.price}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for='description'>Description</Label>
                    <Input
                      type='textArea'
                      name='description'
                      id='description'
                      placeholder='Description'
                      onChange={this.handleChange}
                      value={this.state.description}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for='website'>WebSite</Label>
                    <Input
                      type='text'
                      name='website'
                      id='website'
                      placeholder='WebSite'
                      onChange={this.handleChange}
                      value={this.state.website}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <button type='submit'>Submit</button>
            </Form>

          </Container>
        </Jumbotron>

      </div>
    );
  };
};

export default AddNewBook;
