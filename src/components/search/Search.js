import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Search extends Component {
  render () {
    let divStyle = {
      backgroundColor: '#C6A3A8',
      padding: '20px 20px 0 20px',
      margin: '20px',
      borderRadius: '10px',
      color: '#483C3E',
    };

    return (
      <div style={divStyle}>
        <h3 className='d-flex justify-content-around align-center'>Search By Title or Author</h3>
        <SearchBar
          searchBy={this.props.searchBy}
          updateSearch={this.props.updateSearch}
          searchValue={this.props.searchValue}
          sortByTitleOrAuthor={this.props.sortByTitleOrAuthor}
        />
      </div>
    );
  };
};

export default Search;
