import React, { Component } from 'react';
import BookStore from './components/store/BookStore';
import Admin from './components/admin/Admin';

class App extends Component {
  state = {
    books: [],
    search: '',
    searchBy: 'title',
    togglePage: false,
  };

  // STORE USER SEARCH INPUT <---WORKING
  updateSearch = (e) => {
    this.setState({ search: e.target.value });
    this.sortList();
  }

  // TOGGLE SEARCH CRITERIA <---WORKING
  sortByTitleOrAuthor = () => {
    if (this.state.searchBy === 'title') {
      this.setState({ searchBy: 'author' });
    } else {
      this.setState({ searchBy: 'title' });
    }
  }

  // SORT LIST ON USER INPUT <---WORKING
  sortList = () => {
    const bookList = this.state.books.filter(book => {
      let term = book[this.state.searchBy].toLowerCase();
      let search = this.state.search.toLowerCase();

      return term.includes(search);
    });

    if (this.state.search.length === 0) {
      return this.state.books;
    }

    return bookList;
  }

  // TOGGLE BETWEEN ADMIN PAGE AND USER PAGE <---WORKING
  togglePageHandler = () => {
    if (this.state.togglePage === false) {
      this.setState({ togglePage: true });
    } else {
      this.setState({ togglePage: false });
    }
  };

  // ADMIN/USER: GET ALL REQUEST <---WORKING
  componentDidMount = async () => {
    try {
      const res = await fetch('https://collective-api-mw.herokuapp.com/api/books');
      if (!res.ok) throw new Error();
      const booksFromJson = await res.json();

      this.setState({
        books: booksFromJson.map( book => {
          return {
            ...book,
            display: false,
          }
        })
      });
    } catch (e) {
      alert(e);
    };
  };

  // ADMIN: CREAT NEW BOOK
  createBook = async newBook => {
    const res = await fetch('https://collective-api-mw.herokuapp.com/api/books', {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const newBookWithId = await res.json();
    this.setState(prevState => {
      return {
        books: [
          ...prevState.books,
          newBookWithId
        ]
      }
    })
    return;
  };

  // ADMIN: EDIT BOOK <--- NOT WORKING
  async editBook(book) {
    const response = await fetch('https://collective-api-mw.herokuapp.com/api/books', {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const newBook = await response.json()
    this.setState({
      books: [
        ...this.state.books,
        newBook
      ]
    })
  }

  // ADMIN: DELETE BOOK
  deleteBook = id => {
    fetch(`https://collective-api-mw.herokuapp.com/api/books/${id}`, {
      method: 'DELETE'
    })
    .then( () => {
      this.setState(prevState => {

        return {
          ...prevState,
          books: prevState.books.filter( book => book.id !== id)
        }
      })

    })
    this.render();
  };

  // USER ADD BOOK TO CART <---WORKING
  addToCart = id => {
    fetch(`https://collective-api-mw.herokuapp.com/api/books/cart/add/${id}`, {
      method: 'PATCH'
    })
    .then( () => {
      this.setState(prevState => {
        return {
          books: prevState.books.map( book => {
            if (book.id === id) {
              return {
                ...book,
                inCart: true,
              }
            } else {
              return book
            }
          })
        }
      })
    })
  };

  // USER REMOVE BOOK FROM CART <---WORKING
  removeFromCart = id => {
    fetch(`https://collective-api-mw.herokuapp.com/api/books/cart/remove/${id}`, {
      method: 'PATCH'
    })
    .then( () => {
      this.setState(prevState => {
        return {
          books: prevState.books.map( book => {
            if (book.id === id) {
              return {
                ...book,
                inCart: false,
              }
            } else {
              return book
            }
          })
        }
      })
    })
  };

  render() {

    // TEMPORARY ROUTING WORKAROUND BETWEEN USER
    // AND ADMIN UNTIL WE GO OVER ROUTING LECTURE
    let bookStorePage = <BookStore
      searchBy={this.state.searchBy}
      updateSearch={this.updateSearch}
      searchValue={this.state.search}
      sortList={this.sortList}
      sortByTitleOrAuthor={this.sortByTitleOrAuthor}
      addToCart={this.addToCart}
      removeFromCart={this.removeFromCart}
      togglePageHandler={this.togglePageHandler}
    />

    let adminPage = <Admin
      togglePageHandler={this.togglePageHandler}
      books={this.state.books}
      deleteBook={this.deleteBook}
      createBook={this.createBook}
      editBook={this.editBook}
    />

    let returnedPage = this.state.togglePage === false ? bookStorePage : adminPage;

    return (
      <div>
        {returnedPage}
      </div>
    );
  };
};

export default App;
