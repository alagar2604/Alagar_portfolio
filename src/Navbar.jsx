import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
  <i class="fa-brands fa-algolia fs-2 fw-bold mx-2 "></i>
   <h1 className='fw-bold fs-2'>Alagarsamy</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item mx-3">
          <Link to={"/"} className="nav-link active" aria-current="page" href="#">ABOUT</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to={"/project"} className="nav-link" href="#">PROJECT</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to={"/resume"}className="nav-link" href="#">RESUME</Link>
        </li>
       
       
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar