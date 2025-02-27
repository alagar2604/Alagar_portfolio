import React from 'react'
import Logo from '../src/assets/logoS.jpg'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
  <img src={Logo} alt="" width={"40px"} className='mx-3 logo' />
   {/* <h1 className='fw-bold fs-2 text-light'>Alagarsamy</h1> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
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
