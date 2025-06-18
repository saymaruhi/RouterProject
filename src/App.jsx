import Home from "./home";
import About from "./about";
import Login from "./login";
import College from "./college";
import Student from "./student";
import Department from "../Department";
import Details from "./Details";
import PageNotFound from "./pageNotFound";
import { Route, Routes,  Navigate } from "react-router";
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
        <Route path= "/college" element={<College />}>

        <Route path= "student" element={<Student />} />
        <Route path= "department" element={<Department />} />
        <Route path= "details" element={<Details />} />

        </Route>
        
        

       <Route path= "/*" element={<PageNotFound />} />
       <Route path= "/*" element={<Navigate to= "/about" />} />{/*navigate to use 404, open page whaterver you give*/}
       
        
      
      </Routes>
    
    
    </div>
  );
}

export default App;
