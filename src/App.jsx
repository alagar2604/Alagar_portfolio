
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Resume from './Resume'
import Project from './Project'

function App() {
  

  return (
    <>
       <BrowserRouter>
        <Navbar/>
        <div className="container-fluid">
          <Routes>
            <Route path='/Alagar_portfolio' index element={<About/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
          </Routes>

        </div>
       </BrowserRouter>
    
    </>
  )
}

export default App
