import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
   
   <h1 className='fw-bold fs-2 text-light'>Alagarsamy</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item mx-3">
          <a className="nav-link active text-light" aria-current="page" href="#about">ABOUT</a>
        </li>
        <li className="nav-item mx-3">
          <a  className="nav-link text-light" href="#service">SERVICE</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link text-light" href="#contact">CONTACT</a>
        </li>
        
    </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar