import React, { useState, useEffect } from "react";
import Axios from "axios";
import image from "../images/update.jpeg";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
  });

  useEffect(() => {
    Axios.get(`http://localhost:4000/book/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:4000/book/${id}`, book)
      .then((res) => {
        console.log("Book updated:", res.data);
        toast.success(res, {
          position: "bottom-left",
        });
        setTimeout(() => {
          navigate("/view");
        }, 1000);
        // Redirect to the book list page or handle navigation as needed
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        toast.error(error, {
          position: "bottom-left",
        });
      });
  };

  return (
<>

<div className="d-flex justify-content-center align-items-center vh-100">
  <div className="card shadow" style={{ width: "35rem" }}>
    <img src={image} className="card-img-top" alt="Card" />
    <div className="card-body">
      <h5 className="card-title">Update Book</h5>
      
      <form onSubmit={handleUpdate}>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Title:</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Author:</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Genre:</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="genre"
              value={book.genre}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">Update</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  </div>
</div>







    </>
  );
}

export default UpdateBook;
