import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import photo1 from "../images/carousal-1.jpg"
import photo2 from "../images/carousal-2.jpg"
import photo3 from "../images/carousal-3.jpg"
import Axios from "axios";
const Home = () => {

  const [fdata, setFData] = useState([]);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  
  useEffect(() => {


    const verifyCookie = async () => {
      
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  
  
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };


  useEffect(() => {
    Axios.get("http://localhost:4000/book").then((res) => {
      setFData(res.data);
    });
  }, []);


  return ( 
      <> 
      <body>
        
        {/* navbar */}
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <h2 class="navbar-brand" >Library</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Service">Service</a>
        </li>
      
        <li class="nav-item">
          <a class="nav-link active" href="/about">About</a>
        </li>
        </ul>
      <form class="d-flex" >
        <button class="btn btn-outline-success" onClick={Logout}>Logout</button>
      </form>
    </div>
    <br></br>
  </div>
</nav>

<br></br>










<div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={photo1}
              class="d-block w-100"
              alt="..."
              style={{width:"200px",height:"550px",objectFit:"cover"}}
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={photo2}
              class="d-block w-100"
              alt="..."
              style={{width:"200px",height:"550px",objectFit:"cover"}}
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={photo3}
              class="d-block w-100"
              alt="..."
              style={{width:"200px",height:"550px",objectFit:"cover"}}
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    <br></br>
<center><h1 style={{position:"center",fontFamily:"sans-serif"}}>New Arrivals!!</h1></center>
<br></br>
<br></br>
    {/* <div class="container">
     



      <div class="row">
          <div class=" col-md-3 col-lg-3 col-sm-12">
              <div class="card" >
                  <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,englishbook" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">C++</h5>
                    <p class="card-text">Study C++</p>
                    <a href="#" class="btn btn-primary">Read </a>
                  </div>
                </div>
          </div>
          <div class=" col-md-3 col-lg-3 col-sm-12">
              <div class="card" >
                  <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,study" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Java</h5>
                    <p class="card-text">Study Java</p>
                    <a href="#" class="btn btn-primary">Read</a>
                  </div>
                </div>
          </div>
          <div class=" col-md-3 col-lg-3 col-sm-12">
              <div class="card" >
                  <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,code" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Python</h5>
                    <p class="card-text">Study Python</p>
                    <a href="#" class="btn btn-primary">Read</a>
                  </div>
                </div>
          </div>
          <div class=" col-md-3 col-lg-3 col-sm-12">
              <div class="card" >
                  <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,code" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Sql</h5>
                    <p class="card-text">Study Sql</p>
                    <a href="#" class="btn btn-primary">Register</a>
                  </div>
                </div>
          </div>
      </div>
      
    </div> */}

<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {fdata.slice(-4).map((book) => (
    <div className="col-md-3 col-lg-3 col-sm-6 mb-4" key={book._id}>
      <div className="card shadow-sm">
        <img
          src={book.image}
          className="card-img-top"
          alt="Book Cover"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="card-text">
            <strong>Genre:</strong> {book.genre}
          </p>
          <p className="card-text">
            <strong>Year:</strong> {book.year}
          </p>
          <div className="d-flex justify-content-center align-items-center mt-3">
          <a href={`/view`} className="btn btn-primary me-2">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
   

    
  

    </body>
    <hr></hr>
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
    <ToastContainer />

      </>
  );
}

export default Home;