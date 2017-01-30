'use strict';

// require("babel-core").transform("code", options);

function Book(title, author, pages, yearPublished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.PublishDate = new Date(yearPublished, 0, 1);
};

var library = {
  books: [new Book('Eloquent Javascript', 'Marjin Haverbeke', 300, 2013), new Book('JavaScript & jQuery', 'Jon Duckett', 348, 2014), new Book('JavaScript the Good Parts', 'Douglas Crockford', 148, 2010), new Book('JavaScript the crappy Parts', 'Douglas Crockford', 14, 2010)],

  // addBook: (title, author, pages, yearPublished) => {
  //   for (var i = 0; i < this.books.length; i++) {
  //     if (this.books[i].title === title) {
  //       console.log("Library already contains that title")
  //       return false;
  //     }
  //   }
  //   this.books.push(
  //     new Book(title, author, pages, yearPublished)
  //   )
  //     return true;
  // },
  addBook: function addBook(title, author, pages, yearPublished) {
    library.books.forEach(function (book) {
      console.log(book.title);
      if (book.title.toLowerCase() === title.toLowerCase()) {
        console.log("Library already contains that title");
        return false;
      }
      library.books.push(new Book(title, author, pages, yearPublished));
    });
  },
  removeBookByTitle: function removeBookByTitle(title) {
    var index = 0;
    undefined.books.forEach(function (book) {
      if (book.title.toLowerCase() === title.toLowerCase()) {
        undefined.books.splice(index, 1);
        console.log(title, 'removed from library');
        return true;
      }
      index += 1;
      return false;
    });
    console.log('Title not found');
    return false;
  },

  removeBooksByAuthor: function removeBooksByAuthor(author) {
    var libraryInitialLength = undefined.books.length;
    var index = 0;
    var nameComponents = author.toLowerCase().split(' ');

    undefined.books.forEach(function (book) {
      nameComponents.forEach(function (name) {
        if (book.author.toLowerCase().includes(name)) {
          undefined.books.splice(index, 1);
          index += 1;
          console.log('Books by ' + author + ' removed from library');
          return true;
        }
      });
    });
    if (undefined.books.length < libraryInitialLength) {
      return true;
    } else console.log('Author not found');
    return false;
  },

  getRandomBook: function getRandomBook() {
    var match = 0;
    if (undefined.books.length === 0) {
      console.log(null, '...There aren\'t any books');
    } else {
      var random = Math.floor(Math.random() * undefined.books.length);
      console.log("Here's a random book...", undefined.books[random]);
    }
    return false;
  },

  getBooksByTitle: function getBooksByTitle(title) {
    var titleWords = title.toLowerCase().split(' ');
    var match = [];
    titleWords.forEach(function (word) {
      undefined.books.forEach(function (book) {
        if (book.title.toLowerCase().includes(word)) {
          match.push(book);
        }
      });
    });
    console.log('Here are the books with authors that match any words in your search: ', match);
  },

  getBooksByAuthor: function getBooksByAuthor(authorName) {
    var _this = this;

    var authorNameComponents = authorName.split(' ');
    var match = [];
    authorNameComponents.forEach(function (name) {
      _this.books.forEach(function (book) {
        if (book.author.includes(name)) {
          match.push(book);
        }
      });
    });
    console.log('Here are the books with authors that match any words in your search: ', match);
  },

  addBooks: function addBooks(arrayOfBooks) {
    var numBooksAdded = 0;
    for (var i = 0; i < arrayOfBooks.length; i++) {
      this.books.push(arrayOfBooks[i]);
      numBooksAdded += 1;
    }
    console.log(numBooksAdded, 'books added');
  },

  getAuthors: function getAuthors() {
    var _this2 = this;

    console.log(this.books);
    var authors = [];
    this.books.forEach(function (book) {
      !authors.some(function (author) {
        return author === book.author;
      });
      authors.push(_this2.books[i].author);
    });

    console.log('authors', authors);
    return true;
  },

  getRandomAuthorName: function getRandomAuthorName() {
    var match = 0;
    if (this.books.length === 0) {
      console.log(null, ' No books in library');
    } else {
      var random = this.books[Math.floor(Math.random() * this.books.length)];
    }
    return random;
  }
};