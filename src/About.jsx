import React from 'react'
import "./About.css"
import Pic from './Pic'
import Logo from '../src/assets/logoS.jpg'
import 'aos/dist/aos.css';

function About() {
  return (
    <>
    <div className="container-fluid main-1 d-flex justify-content-center align-items-center">
        <div className="container  d-flex justify-content-center align-items-center align-items-lg-start  flex-column">
           <h3 className='text-light ' data-aos="fade-right" data-aos-duration="1000"> I AM ALAGARSAMY</h3>
           <h1 className='text-light fw-bolder ' data-aos="fade-left" data-aos-duration="2000">FRONT-END DEVELOPER</h1>
           <a className='btn rounded-0 border-light text-light fw-bold ' href='#contact' data-aos="fade-up" data-aos-duration="1000">CONTACT ME</a>
        </div>
    </div>
    <div className="container-fluid main-2 bg-dark " >
            <div className="container-fluid py-5"  data-aos="fade-down">
                   <h4 className='text-light text-center' >What i do</h4>
                   <h2 className='text-light fw-bold fs-1 text-center'>My service</h2>
           </div>
          
          <Pic/>
    </div>

          {/* part2  about me*/}


    <div className="container-fluid main-3   d-flex justify-content-center align-items-center ">
      <div className="container " id='about'>
      <div className="row  ">
            <div className="col-12 col-lg-6  py-5 d-flex flex-column justify-content-center">
              <h5 className='text-light'>expert Front-End-Developer</h5>
               <h1 className='fw-bold text-light fs-3 py-2'  data-aos="fade-right" data-aos-duration="1000">About Me</h1>
               <p className='text-light py-4'>As a passionate freelance front-end developer, I bring a blend of technical expertise and creative vision to craft visually appealing and user-friendly websites. With proficiency in HTML, CSS, JavaScript, and modern frameworks like React and Vue, I excel at translating design concepts into pixel-perfect digital experiences. </p>
               <p className='text-light'> My focus on responsive design, performance optimization, and accessibility ensures seamless interactions across all devices. I thrive in collaborative environments, working closely with clients to understand their needs and deliver high-quality projects on time and within budget.</p>
             
           <button className='btn btn-sm  rounded-0 border-light text-light fw-bold  '> Download CV</button>

            </div>
            
            <div className=" col-12 col-lg-6  ">
               <div className="container h-100 ">
                 <img src="https://images.pexels.com/photos/5935788/pexels-photo-5935788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-100 border border-1 border-light p-3 ' alt="" height={"100%"}  />
                 
               </div>
               

            </div>
        </div>
      </div>
        
    </div>
    {/* contact  form*/}
    <div className="container-fluid  p-0 m-0  contact h-100 w-100  d-flex justify-content-center align-items-center " >
      <div className="container-fluid bg-dark main-4 d-flex " id='contact'>
        <div className="container bg-dark ">
          <div className="row h-100 w-100    ">
             <div className="col-12 col-lg-6 d-flex flex-column justify-content-center ">
               <h2  className='fw-bold text-light  text-light '>My Contacts</h2>
               <p className='text-light my-2'>Results-driven Frontend Developer with expertise in React and JavaScript. Developed responsive web applications and reducing load times by 60%. Skilled in WebGL and 3D rendering, creating immersive user experiences that increased engagement by 35%.</p>
             <h2 className='fw-bold text-light'>Address</h2>
             <p className='text-light'>No 18, Second Block ,Rajarathinam stadium , pudupet , Chennai 600002</p>
             <h2 className='fw-bold text-light'>phone</h2>
             <p className='text-light'>+91 7708749403</p>
             <h2 className='fw-bold text-light'>E-mail</h2>
             <p className='text-light'>alagarsamy200401@gmail.com</p>
             </div>

             <div className="col-12 col-lg-6 d-flex flex-column justify-content-center py-3 ">
                 <h2 className='text-light fw-bold  py-4'>Quick Contact Form</h2>
                  <div className="row  ">

                      <input type="text" placeholder='Your Name' className='bg-dark text-light border border-1 border-light  py-2 my-2'/>
                      <input type="text" placeholder='Your Phone' className='bg-dark text-light border border-1 border-light  py-2 my-2'/>
                      <input type="text" placeholder='Your Address' className='bg-dark text-light border border-1 border-light py-2 my-2'/>
                        <textarea name="" id="" placeholder='Your Message 'className='bg-dark border border-1 border-light text-light   '></textarea>
                  </div>
                 
                  <button className='py-2 px-4 bg-dark border-1 my-3 text-light fw-bold   '>Submit</button>
             </div>
          </div>
        </div>
        
      </div>
         
            
    </div>
    {/* footer */}
    <div className="container-fluid main-5  py-5">
        <div className="container d-flex justify-content-center"  data-aos="fade-left" data-aos-duration="2000">
               <img src={Logo} alt="" width={"100px"} className='mx-3 logo' />
             
        </div>
        <div className="container-fluid py-4 ">
           <div className="row ">
            <div className="col d-flex justify-content-center">

              <a href=""><i class="fa-brands fa-facebook fs-1 fw-bold mx-2 text-light "></i></a>
              <a href=""><i class="fa-brands fa-twitter fs-1 fw-bold mx-2 text-light "></i></a>
              <a href=""><i class="fa-brands fa-instagram fs-1 fw-bold mx-2 text-light "></i></a>
              <a href=""><i class="fa-brands fa-pinterest fs-1 fw-bold mx-2 text-light "></i></a>
              <a href=""><i class="fa-brands fa-youtube fs-1 fw-bold mx-2 text-light "></i></a>
            </div>
            <h4 className='fs-5 text-center text-light py-3'>copyright2025 - Devolped by Alagarsamy</h4>
          </div>
        </div>
    </div>
  
   
    </>
  )
}

export default About