import React from 'react'
import { Link } from 'react-router'
function NavBar() {
  return (
    <div>
     
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
             <li>
              <Link to={"/college"}>College</Link>
            </li>
          </ul>
       
      </div>
    </div>
  )
}

export default NavBar
