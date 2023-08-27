import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NoPage from "./Components/Nopage";
import Service from "./Components/services";
import View from "./Components/view";
import UpdateBook from "./Components/update";

const App=()=>{
  return(
    
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="service" element={<Service />} />
            <Route path="view" element={<View />} />
          </Route>
          <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
           
            <Route path="/update/:id" element={<UpdateBook />} />
            
          
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;