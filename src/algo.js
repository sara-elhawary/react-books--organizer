const newTitle2 = 'book2'
const state = {
  currentlyReading: [
     { title: 'book1', authors: 'sara' } ,
      { title: 'book2', authors: 'nour' } ,
  ],
  read: [
    {  { title: 'book3', authors: 'yomn' } },
    {  { title: 'book4', authors: 'leen' } },
  ],
  wantToRead: [
    {  { title: 'book5', authors: 'zahra' } },
    {  { title: 'book6', authors: 'hager' } },
  ],
}

//object of objects where each object value is an array
const shelves = Object.values(state)

//array of objects, where each object value is an object
// const bookShelfArr = [
//   { 0: { title: 'book1', authors: 'sara' } },
//   { 1: { title: 'book2', authors: 'nour' } },
// ]
shelves.map((bookShelfArr) =>
  bookShelfArr.map((book) => {
    let booksObject = Object.values(book)
    let books = booksObject.map((book) => {
      let bookTitle = book.title
      // return console.log(Object.keys(book))
      if (bookTitle === newTitle2) {
        delete book.title
      }
      return console.log(bookTitle)
    })
    // console.log(books)
  })
)
