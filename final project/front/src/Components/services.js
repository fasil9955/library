import "./service.css"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect,useState } from 'react';
const Service = () => {

  const [fbooks, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:4000/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    

  const [inputValue, setInputValue] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const { title  , author , genre} = inputValue;

  const handleOnChange = (e) => {
    const {id, value } = e.target;
    setInputValue({
      ...inputValue,
      [id]: value,
    });
  };


  const handleError = (err) =>{
    toast.error(err, {
      position: "bottom-left",
    });
  };
  const handleSuccess = (msg) =>{
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://localhost:4000/addbook",
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        const { success, message } = data;
        if (success) {
          handleSuccess(message);
         
        } else {
          
          handleError(message);
        }
      } catch (error) {
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        title: "",
        author: "",
        genre: "",
        
      });
    };
  
    return ( 
        <>
        <body>
            
        <h5 class="card-title">Add Book</h5>
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add</button>
      
    

{/* adding book */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Book to the Library</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
    
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter book title"
            value={title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter author name"
            value={author}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre:</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Enter book genre"
            value={genre}
            onChange={handleOnChange}
            required
          />
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Add Book</button>
        </div>
      </form>
   </div> 
      </div>
      
    </div>
  </div>
</div>
   

 {/* display */}

 <div>
  <h3>available books</h3>
  <div>
        {fbooks.map((books) => {
          return (
            <div
              style={{
                backgroundColor: "aqua",
                width: "25%",
                float: "left",
                margin: "10px",
              }}
              key={books._id}
            >
              {books.title}
              <br></br>
              {books.author}
              <br></br>
              {books.genre}
              <br></br>
             
            </div>
          );
        })}
      </div>

 </div>




<div>
<footer class="bg-light pb-5">
      <div class="container text-center">
        <div>
          <div>Contact US</div>
          <div>Phone:+91 7025047555</div>
          <div>E-Mail:edu@gmail.com</div>
        </div>
        <p class="font-italic text-muted mb-0">
          &copy; Copyrights education.com All rights reserved.
        </p>
      </div>
    </footer>
 </div>
      <ToastContainer/>
</body>
        </>
     );
}

export default Service;