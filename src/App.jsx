import Home from "./home";
import About from "./about";
import Login from "./login";
import PageNotFound from "./pageNotFound";
import { Route, Routes, Link } from "react-router";
import "./header.css";

function App() {
  return (
    <div >
      <div className="header">
        <Link className= "link"to= {"logo"} ><h2>Logo</h2></Link>
        
          <ul >
            <li>
              <Link to={"/"}> Home</Link>
            </li>

            <li>

              <Link to={"/about"}> About</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
       
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
       <Route path= "/*" element={<PageNotFound />} />
       
        
      
      </Routes>
     
    
    </div>
  );
}

export default App;
