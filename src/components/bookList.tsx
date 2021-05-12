import Search from "./search";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";

const BookList: React.FC = () => {
  const [searchTxt, setSearchTxt] = React.useState("");

  const [books, setBooks] = React.useState([]);

  const [displayBooks, setDisplayBooks] = React.useState(books);

  useEffect(() => {
    if (searchTxt === "") {
      setDisplayBooks(books);
    } else {
      fetch(`http://localhost:3030/books?q=${searchTxt}`)
        .then((res) => res.json())
        .then((data) => setDisplayBooks(data));
    }
  }, [searchTxt, books]);

  React.useEffect(() => {
    fetch("http://localhost:3030/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch(err => console.log("An error occured -- " + err.message)
      )
     
  }, []);

  // const getBooks = () => {
  //   let books: any = localStorage.getItem("books");
  //   if (!books) {
  //     books = [];
  //   } else {
  //     books = JSON.parse(books);
  //   }
  //   return books;
  // };
  // let books = getBooks();
  // console.log(books[2].title.slice(0, 40));

  return (
    <div>
      <Search onSearch={(txt: string) => setSearchTxt(txt)}></Search>
      <div className="books-list">
        {displayBooks.map((book: any, index: number) => {
          return (
            <div className="book-display" key={index} title={book.title}>
              <img src={book.cover} alt={book.title} />
              <h6>
                <Link to={`/bookdetails/${book.id}`}>
                  {book.title.length <= 18
                    ? book.title
                    : book.title.slice(0, 18) + "..."}
                </Link>
              </h6>
              <p>By : {book.author}</p>
              <Rating rating={book.rating}/>
              {/* <p className="details">Rating : {book.rating}</p> */}
              <p className="details">Price : ₹ {book.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// class _BookList extends React.Component {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       search: "",
//     };
//   }
//   getBooks = () => {
//     let books: any = localStorage.getItem("books");
//     if (!books) {
//       books = [];
//     } else {
//       books = JSON.parse(books);
//     }
//     return books;
//   };

// render() {
//   let books = this.getBooks();
//   console.log(books[2].title.slice(0, 40));

//   return (
//     <div>
//       <Search></Search>
//       <div className="books-list">
//         {books.map((book: any, index: number) => {
//           return (
//             <div className="book-display" key={index}>
//               <img src={book.bookurl} alt={book.title} />
//               <h6 title={book.title}>
//                 <a>
//                   {book.title.length <= 18
//                     ? book.title
//                     : book.title.slice(0, 18) + "..."}
//                 </a>
//               </h6>
//               <p>By : {book.author}</p>
//               <p>Rating : {book.rating}</p>
//               <p>Price : ₹ {book.price}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     );
//   }
// }

// const _BookList = () => {
//   let books = getBooks();
//   console.log(books[2].title.slice(0, 40));

//   return (
//       <div>
//           {/* <Search ></Search> */}
//     <div className="books-list">
//       {books.map((book: any, index: number) => {
//         return (
//           <div className="book-display" key={index}>
//             <img src={book.bookurl} alt={book.title} />
//             <h6 title={book.title}>
//               <a>
//                 {book.title.length <= 18
//                   ? book.title
//                   : book.title.slice(0, 18) + "..."}
//               </a>
//             </h6>
//             <p>By : {book.author}</p>
//             <p>Rating : {book.rating}</p>
//             <p>Price : ₹ {book.price}</p>
//           </div>
//         );
//       })}
//     </div>
//     </div>
//   );
// };

// const getBooks = () => {
//   let books: any = localStorage.getItem("books");
//   if (!books) {
//     books = [];
//   } else {
//     books = JSON.parse(books);
//   }
//   return books;
// };

export default BookList;
