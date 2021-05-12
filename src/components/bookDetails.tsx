import { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import CustomButton from "./customButton";
import Rating from "./rating";

type Params = {
  bookid: string;
};

const BookDetails = ({ match }: RouteComponentProps<Params>) => {
  const history = useHistory();
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    price: "",
    rating: "",
    cover: "",
    authorurl: "",
    description: "",
  });

  const [displayText, setDisplayText] = useState("");

  const [textstate, setTextState] = useState("collapsed");

  useEffect(() => {
    setDisplayText(book.description.slice(0, 220) + "...");
  }, [book]);

  useEffect(() => {
    fetch(`http://localhost:3030/books?id=${match.params.bookid}`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayText(data[0].desciption);
        setBook(data[0]);
      });
  }, []);

  const handleText = () => {
    if (textstate === "collapsed") {
      setDisplayText(book.description);
      setTextState("expanded");
    } else if (textstate === "expanded") {
      setDisplayText(book.description.slice(0, 220) + "...");
      setTextState("collapsed");
    }
  };

  const previousPage = () => {
    history.push("/");
    return;
  };

  const handelDelete = (id: number) => {
    fetch(`http://localhost:3030/books/${id}`, { method: "DELETE" })
      .then((respose) => respose.json())
      .then(() => {
        alert("Book Deleted Id: " + id);
        history.push("/");
      });
  };

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.cover} />
      <h3>By : {book.author}</h3>
      <h5>Price : ₹ {book.price}</h5>
      {/* <h5>Rating : {book.rating}</h5> */}
      <h5>
        <Rating rating={Number(book.rating)} />
      </h5>
      <fieldset>
        <legend>Description :</legend>
        <p>
          {displayText}
          <p onClick={handleText}>
            {textstate === "collapsed" ? "Read more" : "Read less"}
          </p>
        </p>
      </fieldset>

      <CustomButton
        text=""
        icon="fas fa-backspace"
        customStyle={{ color: "black" }}
        onclickaction={() => previousPage()}
        title = "Go Back"
      />
      <CustomButton
        text=""
        icon="fas fa-trash-alt"
        customStyle={{ color: "red" }}
        onclickaction={function () {
          handelDelete(Number(book.id));
        }}
        title = "Delete Book"
      />
    </div>
  );
};

export default BookDetails;
