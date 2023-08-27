

import { Outlet, Link } from "react-router-dom";



const Layout = () => {



  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Library</a>
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
          <a class="nav-link active" href="/view">display</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        
        
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
        <button class="btn btn-outline-success">Logout</button>
      </form>
    </div>
    <br></br>
  </div>
</nav>
      
      
      
      
      
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;