import React, { useState, useEffect } from "react";
import Axios from "axios";
import image from "../images/update.jpeg";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./UpdateForm.css"

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year:"",
    image:"",
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBook({
          ...book,
          image: reader.result, // Store the base64 encoded image
        });
      };
      reader.readAsDataURL(file);
    }
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:4000/book/${id}`, book)
      .then((res) => {
        console.log("Book updated:", res.data);
        alert("Updated")
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

{/* <div className="d-flex justify-content-center align-items-center vh-100">
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
</div> */}


<div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
        
          <form   onSubmit={handleUpdate} >
            <h1 class="heading">Update</h1>
            <br class="break"></br>
            <img src={book.image} className="card-img-top" alt="Card" />
            <br></br>
            <hr></hr>
            <div class="formbold-input-flex">
                    <label class="formbold-form-label">
                     Change image
                    </label>
                    <input
                      type="file"
                      class="formbold-form-input"
                      id="image"
                      placeholder='.jpeg file'
                      onChange={handleImageChange}
                      accept="image/*"
                    ></input>
                  </div>
              <div class="formbold-input-flex">
                <div>
                    <input
                     type="text"
                     name="title"
                     value={book.title}
                     onChange={handleInputChange}
                    
                  
                    class="formbold-form-input"
                     />
                    <label  class="formbold-form-label">Title</label>
                </div>
                <div>
                    <input
                    class="formbold-form-input"
                    type="text"
                    name="author"
                    value={book.author}
                    onChange={handleInputChange}
                    
                   
                    />
                    <label  class="formbold-form-label">Author</label>
                </div>
              </div>
              <div class="formbold-input-flex">
                <div>
                    <input
                    class="formbold-form-input"
                    type="text"
                    name="genre"
                    value={book.genre}
                    onChange={handleInputChange}
                    
                    
                    />
                    <label class="formbold-form-label"> Genre </label>
                </div>
                <div>
                    <input
                    class="formbold-form-input"
                    type="date" 
                    name="year"
                    value={book.year}
                    onChange={handleInputChange}
                   />
                    <label class="formbold-form-label"> Publication Date </label>
                </div>
              </div>
              <button 
              class="formbold-btn"
              type="submit" >
                  Submit
              </button>
              
              <a href="/view"  class="formbold-btn" type="button" >Cancel</a>
          </form>
        </div>
      </div>






    </>
  );
}

export default UpdateBook;
