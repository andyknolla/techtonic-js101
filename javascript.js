console.log("hello world");

function Book(title, author, pages, yearPublished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date = new Date(yearPublished, 0,1);
};

var library = {
  books: [
    new Book (
      'Eloquent Javascript',
      'Marjin Haverbeke',
      300,
      2013
    )
  ],
  //
  //   new Book {
  //     title: 'Javascript the Good Parts',
  //     author: 'Douglas Crockford',
  //     numberOfPages: 200,
  //     publishDate: new Date(2009,0,1)
  //   },
  //   {
  //     title: 'HTML and CSS',
  //     author: 'Marjin Haverbeke',
  //     numberOfPages: 500,
  //     publishDate: new Date(2014,0,1)
  //   }
  // ],


  checkBooksByTitle: function(title, list) {
    list.forEach(function(book) {
      if(book.title === title) {
        console.log('title check positive ');
        return false;
      } else {
        console.log('title check neg ');
        return true;
      }
    })

  },

  addBook: function(title, author, pages, yearPublished) {
    // TODO check if this book is already in library
    if (this.checkBooksByTitle(title, this.books)) {
      console.log("Library already contains that title")
      return false;
    } else {
      this.books.push(
        new Book(title, author, pages, yearPublished)
      )
      return true;
    }
  },

  removerBookByTitle: function(title) {
    for (var i = 0; i < this.books.length; i++) {
      console.log(this.books[i].title);
      if(this.books[i].title === title) {
        this.books.splice(i, 1);
        console.log(title, 'removed from library');
        return true;
      } else {
        continue;
      }
    }
      console.log('Title not found');
      return false;
  },

  removerBookByAuthor: function(author) {
    var libraryInitialLength = this.books.length;

    for (var i = 0; i < this.books.length; i++) {
      if(this.books[i].author === author) {
        this.books.splice(i, 1);
        console.log('Books by ', author, 'removed from library');
      } else {
        continue;
      }
    }
    if(this.books.length < libraryInitialLength) {
      return true;
    } else
      console.log('Author nor found')
      return false;
  },

  getRandomBook: function() {
      var match = 0;
      if(this.books.length === 0) {
        console.log(null, '...There aren\'t any books')
      } else {
        for (var i = 0; i < match.length != 0; i++) {
          var random = Math.floor(Math.random * 10);
          if(random === 5) {
            console.log(this.books[i]);
            match +=1;
          }
        }
      }
  },

  getBooksByTitle: function(title) {
    //TODO split title into individual words, push into an array
    var titleWords = title.split(' ')
    var match = [];
    // for each item in that array, loop through books and check if this.books[i].title includes it
    for (var i = 0; i < titleWords.length; i++) {
      for (var j = 0; j < this.books.length; j++) {
        if( this.books[j].title.includes(titleWords[i]) ) {
          match.push(this.books[j]);
        }
      }
    }
    console.log('Here are the books with titles that match any words in your search: ', match);
  },

  getBooksByAuthor: function (authorName) {
    var authorNameComponents = autorName.split(' ')
    var match = [];
    // for each item in that array, loop through books and check if this.books[i].title includes it
    for (var i = 0; i < authorNameComponents.length; i++) {
      for (var j = 0; j < this.books.length; j++) {
        if( this.books[j].title.includes(authorNameComponents[i]) ) {
          match.push(this.books[j]);
        }
      }
    }
    console.log('Here are the books with authors that match any words in your search: ', match);
  },

  addBooks: function(arrayOfBooks) {
    var numbBooksAdded = 0;
    for (var i = 0; i < arrayOfBooks.length; i++) {
      this.books.push(arrayOfBooks[i])
      numbBooksAdded +=1;
    }
    console.log(numbBooksAdded);
  },

  getAuthors: function() {
    var authors =[];
    for (var i = 0; i < this.books.length; i++) {
      if(!authors.includes(this.books[i].author)) {
        authors.push(this.books[i].author)
      }
    }
    console.log(authors);
  },

  getRandomAuthorName: function() {
    if(this.books.length === 0) {
      console.log(null, ' No books in library')
    } else {

    }
  }
}
