import Home from "./home";
import About from "./about";
import Login from "./login";
import PageNotFound from "./pageNotFound";
import { Route, Routes, Link, Navigate } from "react-router";
import "./header.css";
import NavBar from "./NavBar";

function App() {
  return (
    <div >
     
 <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
       <Route path= "/*" element={<PageNotFound />} />
       <Route path= "/*" element={<Navigate to= "/about" />} />{/*navigate to use 404, open page whaterver you give*/}
       
        
      
      </Routes>
    
    
    </div>
  );
}

export default App;
