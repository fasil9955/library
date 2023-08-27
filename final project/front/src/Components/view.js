import React, { useEffect, useState } from "react";
import Axios from "axios";
import image from "../images/addbook.jpg";
import { ToastContainer, toast } from "react-toastify";

function Myblogs() {
  const [fdata, setFData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/book").then((res) => {
      setFData(res.data);
    });
  }, []);



  const handleDelete = (bookId) => {
    // Send a DELETE request to the server
    Axios.delete(`http://localhost:4000/book/${bookId}`)
      .then((res) => {
        // Update the list of books after successful deletion
        toast.success(res, {
            position: "bottom-left",
          });
        setFData(fdata.filter((book) => book._id !== bookId));
      })
      .catch((error) => {
        toast.error(error, {
            position: "bottom-left",
          });
        console.error("Error deleting book:", error);
      });
  };

  return (
    <>
      <div className="myblogs-container">
      <h3 className="text-center mt-4 mb-3" style={{ color: "darkblue", fontWeight: "bold", fontSize: "34px" }}>
  Available Books
</h3>


        <div className="row row-cols-1 row-cols-md-3 g-4">
          {fdata.map((book) => (
            <div className="col-md-4 col-lg-4 col-sm-12" key={book._id}>
              <div className="card">
                <div className="card-body">
                  <img src={image} className="card-img-top" alt="..." />
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Author: {book.author}</p>
                  <p className="card-text">Genre: {book.genre}</p>
                  <div className="d-flex ">
                  <div style={{ width: "80px" }}></div>
                     <a href={`/update/${book._id}`} className="btn btn-primary">Update</a>
                    <div style={{ width: "10px" }}></div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Myblogs;
