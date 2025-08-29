const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//1. Destructuring
const books = getBooks();
books;
const book = getBook(2);
// const title = book.title;
// const author = book.author;
// title;
// author;

const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;
title;
author;
pages;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre);

//2.1 Rest Operator
const [primary, secondary, ...other] = genres;
console.log(primary, secondary, other);

//2.2 Spread Operator
const newArray = [...genres, "XCX"];
console.log(newArray);

const updatedBook = {
  ...book,
  //Adding a new property
  moviePublicationDate: "2001-12-19",
  //Overwriting existing property
  pages: 929,
};
console.log(updatedBook);

//3 Template Literals
const summary = `${title},  a of ${pages} written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
summary;

//4. Ternary Operator
const pagesRange =
  pages > 1000 ? "More than thousand pages" : "Less than thousand pages";

console.log(`The book has ${pagesRange}`);

const summary2 = `${title},  a of ${pages} written by ${author} and published in ${
  publicationDate.split("-")[0]
}. This book has ${hasMovieAdaptation ? "" : "not"} been adadpted as a movie`;
console.log(summary2);

//5. Array Functions
const getYear = (str) => str.split("-")[0]; // no need to return for single line

const getYearWithFormat = (str, format) => {
  // here need to return because this function has curly braces
  if (format == "dd-MM-yyyy") {
    return str.split("-")[2];
  } else {
    return str.split("-")[0];
  }
};

console.log(`This is a year ${getYearWithFormat("20-03-2025", "dd-MM-yyyy")}`);

//6. Short Circuit and Logical Operators
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "no data"; //nullish coalescing operator, It returns the right-hand operand if the left-hand operand is null or undefined
count;

//7. Optional Chaining
var book2 = getBook(3);

function getTotalReviews(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviews(book2));

//8. Array Map Method
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const elentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviews(book),
  };
});

console.log(elentialData);

//9. Array Filter Method
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);
const longBooksAndMovieAdapt = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksAndMovieAdapt);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

//10. Array Reduce Method
const pagesOfBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesOfBooks);

//11. Array Sort
const arr = [3, 7, 1, 5, 9];
const sortedArrAsc = arr.slice().sort((a, b) => a - b);
console.log(sortedArrAsc);
const sortedArrDesc = arr.sort((a, b) => b - a);
console.log(sortedArrDesc);

const sortedByPagesAsc = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPagesAsc);
const sortedByPagesDesc = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPagesDesc);

//12. Immutable Objects

// 12.1 Add to Array
const newBook = {
  id: 6,
  title: "Morals and Dogma",
  author: "Albert Pike",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

//12.2 Delete a Book
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

//12.3 Updating Book Object
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id == 1 ? { ...book, pages: 10 } : book
);
console.log(booksAfterUpdate);

//13. Asycronous JS:Promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

//14. Asyncronous JS: Async/Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
}

const response = getTodos();
console.log(response);
