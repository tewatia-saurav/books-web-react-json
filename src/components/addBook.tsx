import React, { useEffect, useState } from "react";

let books: any = localStorage.getItem("books");
if (!books) {
  books = [];
} else {
  books = JSON.parse(books);
}

const AddBook: React.FC = () => {
  // const [newBook, setNewBook] = React.useState({
  //   title: "",
  //   author: "",
  //   price: "",
  //   rating: "",
  //   bookurl: "",
  //   authorurl: "",
  //   description:""
  // })

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [cover, setCover] = useState("");
  const [authorurl, setAuthorurl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    let newBook = {
      title: title,
      author: author,
      price: price,
      rating: rating,
      cover: cover,
      authorurl: authorurl,
      description: description,
    };

    // let validate = Object.entries(newBook).every((item)=>{
    //   if(item[1] === ""){
    //     return false
    //   }
    // })

    // if(!validate){
    //   e.preventDefault()
    //   alert("Plese fill all the details")
    //   return
    // }
    let url = "http://localhost:3030/books";
    let params = {
      method: "post",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, params)
      .then((res) => res.json())
      .then(() => {
        alert("Book Succesfully added to the system");
      });
  };
  return (
    <div className="form">
      <form>
        <div className="form-outline mb-4">
          {/* <label className="form-label" htmlFor="form4Example1">Name</label> */}
          <input
            type="text"
            id="booktitle"
            name="title"
            className="form-control"
            placeholder="Book Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="bookauthor"
            name="author"
            className="form-control"
            placeholder="Author Name"
            onChange={(e) => setAuthor(e.target.value)}
          />
          {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="bookprice"
                name="price"
                className="form-control"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="bookraring"
                name="rating"
                className="form-control"
                placeholder="Rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-outline mb-4">
          <input
            type="url"
            id="bookcover"
            name="cover"
            className="form-control"
            placeholder="book cover pic url"
            onChange={(e) => setCover(e.target.value)}
          />
          {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
        </div>
        <div className="form-outline mb-4">
          <input
            type="url"
            id="rating"
            name="authorurl"
            className="form-control"
            placeholder="author pic url"
            onChange={(e) => setAuthorurl(e.target.value)}
          />
          {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            name="description"
            id="form4Example3"
            rows={3}
            placeholder="Description of book"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4 submit-btn"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

class _AddBook extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      author: "",
      price: "",
      rating: "",
      bookurl: "",
      authorurl: "",
      description: "",
    };
  }

  handleValueChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e: any) => {
    const book = {
      title: this.state.title,
      author: this.state.author,
      price: this.state.price,
      rating: this.state.rating,
      bookurl: this.state.bookurl,
      authorurl: this.state.authorurl,
      description: this.state.description,
    };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    alert("Book added Successfully!!");
  };

  render() {
    return (
      <div className="form">
        <form>
          <div className="form-outline mb-4">
            {/* <label className="form-label" htmlFor="form4Example1">Name</label> */}
            <input
              type="text"
              id="booktitle"
              name="title"
              className="form-control"
              placeholder="Book Title"
              onChange={this.handleValueChange}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="bookauthor"
              name="author"
              className="form-control"
              placeholder="Author Name"
              onChange={this.handleValueChange}
            />
            {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="bookprice"
                  name="price"
                  className="form-control"
                  placeholder="Price"
                  onChange={this.handleValueChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="bookraring"
                  name="rating"
                  className="form-control"
                  placeholder="Rating"
                  onChange={this.handleValueChange}
                />
              </div>
            </div>
          </div>
          <div className="form-outline mb-4">
            <input
              type="url"
              id="bookcover"
              name="bookurl"
              className="form-control"
              placeholder="book cover pic url"
              onChange={this.handleValueChange}
            />
            {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
          </div>
          <div className="form-outline mb-4">
            <input
              type="url"
              id="rating"
              name="authorurl"
              className="form-control"
              placeholder="author pic url"
              onChange={this.handleValueChange}
            />
            {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              name="description"
              id="form4Example3"
              rows={3}
              placeholder="Description of book"
              onChange={this.handleValueChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 submit-btn"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddBook;
