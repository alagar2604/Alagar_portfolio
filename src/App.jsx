import React, { useEffect } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar'
import About from './About'
import Resume from './Resume'
import Project from './Project'

import Pic from './Pic'
function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
        <Navbar/>
        <div className="container-fluid m-0 p-0">
        <About />
        </div>
    
    </>
  )
}

export default App
