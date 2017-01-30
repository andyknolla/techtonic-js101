// require("babel-core").transform("code", options);

function Book(title, author, pages, yearPublished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.PublishDate = new Date(yearPublished, 0,1);
};

var library = {
  books: [
    new Book (
      'Eloquent Javascript',
      'Marjin Haverbeke',
      300,
      2013
    ),
    new Book (
      'JavaScript & jQuery',
      'Jon Duckett',
      348,
      2014
    ),
    new Book (
      'JavaScript the Good Parts',
      'Douglas Crockford',
      148,
      2010
    ),
    new Book (
      'JavaScript the crappy Parts',
      'Douglas Crockford',
      14,
      2010
    )

  ],

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
  addBook: (title, author, pages, yearPublished) => {
    library.books.forEach( book => {
      if (book.title === title) {
        console.log("Library already contains that title")
        return false;
      }
      library.books.push(
      new Book(title, author, pages, yearPublished)
      )
    })
  },
  removeBookByTitle:(title) => {
    var index = 0;
    this.books.forEach(book => {
      if( book.title.toLowerCase() === title.toLowerCase() ) {
        this.books.splice(index, 1);
        console.log(title, 'removed from library');
        return true;
      }
      index += 1;
      return false;
    });
    console.log('Title not found');
    return false;
  },

  removeBooksByAuthor: author => {
    var libraryInitialLength = this.books.length;
    var index = 0;
    var nameComponents = author.toLowerCase().split(' ');

    this.books.forEach( book => {
      nameComponents.forEach( name => {
        if(book.author.toLowerCase().includes(name)) {
          this.books.splice(index, 1);
          index +=1;
          console.log('Books by ' + author + ' removed from library');
          return true;
        }
      });
    });
    if(this.books.length < libraryInitialLength) {
      return true;
    } else
      console.log('Author not found')
      return false;

  },

  getRandomBook: () => {
    var match = 0;
    if(this.books.length === 0) {
      console.log(null, '...There aren\'t any books')
    } else {
      var random = Math.floor(Math.random() * this.books.length);
      console.log("Here's a random book...", this.books[random]);
    }
    return false;
  },

  getBooksByTitle: title => {
    var titleWords = title.toLowerCase().split(' ');
    var match = [];
    titleWords.forEach((word) => {
      this.books.forEach((book) => {
        if( book.title.toLowerCase().includes(word) ) {
          match.push(book);
        }
      })
    })
    console.log('Here are the books with authors that match any words in your search: ', match);
  },

  getBooksByAuthor: function(authorName) {
    var authorNameComponents = authorName.split(' ');
    var match = [];
    authorNameComponents.forEach((name) => {
      this.books.forEach((book) => {
        if( book.author.includes(name) ) {
          match.push(book);
        }
      })
    })
    console.log('Here are the books with authors that match any words in your search: ', match);
  },

  addBooks: function(arrayOfBooks) {
    var numBooksAdded = 0;
    for (var i = 0; i < arrayOfBooks.length; i++) {
      this.books.push(arrayOfBooks[i])
      numBooksAdded +=1;
    }
    console.log(numBooksAdded, 'books added');
  },

  getAuthors: function() {
    console.log(this.books);
    var authors =[];
      this.books.forEach( book => {
      !authors.some( author => {
        return author === book.author;
      })
        authors.push(this.books[i].author)
    })

    console.log('authors',authors);
    return true;
  },

  getRandomAuthorName: function() {
    var match = 0;
    if(this.books.length === 0) {
      console.log(null, ' No books in library')
    } else {
      var random = this.books[Math.floor(Math.random() * this.books.length)];
    }
      return random;
    }
}
