import React, { Component } from 'react';
import { Input, FormGroup, CustomInput } from 'reactstrap';

class SearchBar extends Component {
  render () {
    let inputStyle = {
      padding: '10px 0 0 0',
      width: '100%',
    };

    let customInputStyle = {
      color: 'white',
      fontWeight: 'bold',
    }

    let changeSearchText = this.props.searchBy === 'title' ? 'Author' : 'Title';

    return (
      <div style={inputStyle} className='d-flex-column justify-content-around align-center'>
        <Input
          type='text'
          defaultValue={this.props.searchValue}
          onChange={this.props.updateSearch}
          placeholder={`Searching by ${this.props.searchBy}`}
        />

        <br />

        <FormGroup>
          <div style={customInputStyle}>
            <CustomInput
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
              label={`Toggle to search by ${changeSearchText}!`}
              onChange={this.props.sortByTitleOrAuthor}
            />
          </div>
        </FormGroup>
      </div>
    );
  };
};

export default SearchBar;
