import React from "react";
import { Link,NavLink, Outlet } from "react-router";

function College() {
  return (
    <div className= "college"style={{textAlign:"center"}}>
     
        <h2>College Page</h2>
        <p>Working on Sprint1</p>
        
          <NavLink  className="link" to="Student">
            Student
          </NavLink>
          <NavLink className="link" to="Department">
            Department
          </NavLink>
          <NavLink className="link" to="Details">
            College Details
          </NavLink>
          <Outlet/>{/*Display child Router*/}
       
      
    </div>
  );
}

export default College;
