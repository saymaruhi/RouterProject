import React from 'react'
import pageImage from "./pageImage.jpg";
import { Link } from 'react-router';

export default function PageNotFound() {
  return (
    <div>
      <div className='page404'>
        <h1>Page Not Found</h1>
       <div>
      <Link className= "space" to= "/">Go to Home Page</Link>
      </div>
        <img src={pageImage}  alt='"404' style={{width: '700px'}} />
       
      </div>
    </div>
  )
}


