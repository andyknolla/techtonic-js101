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
    )
  ],

  addBook: function(title, author, pages, yearPublished) {
    // TODO check if this book is already in library
    for (var i = 0; i < this.books.length; i++) {

      if (this.books[i].title === title) {
        console.log("Library already contains that title")
        return false;
      }
    }
    this.books.push(
      new Book(title, author, pages, yearPublished)
    )
      return true;
  },

  removeBookByTitle: function(title) {
    for (var i = 0; i < this.books.length; i++) {
      if(this.books[i].title === title) {
        this.books.splice(i, 1);
        console.log(title, 'removed from library');
        return true;
      }
    }
    console.log('Title not found');
    return false;
  },

  removeBookByAuthor: function(author) {
    var libraryInitialLength = this.books.length;
    for (var i = 0; i < this.books.length; i++) {
      if(this.books[i].author === author) {
        this.books.splice(i, 1);
        console.log('Books by', author, 'removed from library');
      }
    }
    if(this.books.length < libraryInitialLength) {
      return true;
    } else
      console.log('Author not found')
      return false;
  },

  getRandomBook: function() {
    var match = 0;
    if(this.books.length === 0) {
      console.log(null, '...There aren\'t any books')
    } else {
      var random = Math.floor(Math.random() * this.books.length);
      console.log("Here's a random book...", this.books[random]);
    }
    return;
  },

  getBookByTitle: function(title) {
    var titleWords = title.split(' ')
    var match = [];
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
    var authorNameComponents = authorName.split(' ')
    var match = [];
    for (var i = 0; i < authorNameComponents.length; i++) {
      for (var j = 0; j < this.books.length; j++) {
        if( this.books[j].author.includes(authorNameComponents[i]) ) {
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
    console.log(numbBooksAdded, 'books added');
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
    var match = 0;
    if(this.books.length === 0) {
      console.log(null, ' No books in library')
    } else {
      var random = Math.floor(Math.random() * this.books.length);
      console.log(this.books[random].author);
    }
      return;
    }
}
