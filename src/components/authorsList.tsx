import { useState, useEffect } from "react";

const Authors = () => {
  const [books, setBooks] = useState(Array())

  useEffect(() =>{
    setBooks(books)
  },[books])

  useEffect(() => {

    fetch("http://localhost:3030/books")
      .then((res) => res.json())
      .then((data) => {
        let tempbooks = Array();
        let authors = Array()
        Object.entries(data).forEach((book: any) => {
          let author: string = book[1]["author"];
          
          if (!authors.includes(author)) {
            tempbooks.push(book[1])
            authors.push(author)
          }
        });
        setBooks(tempbooks); 
      });
  }, []);




  return (
    
    <div>
        {console.log(books)}
      {/* <Search onSearch={(txt: string) => setSearchTxt(txt)}></Search> */}
      <div className="books-list">
        {books.map((book: any, index: number) => {
          return (
            <div className="book-display" key={index} title={book.author}>
              <img src={book.authorurl} alt={book.author} />
              <h6>
                {book.author.length <= 18
                  ? book.author
                  : book.author.slice(0, 18) + "..."}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Authors;
