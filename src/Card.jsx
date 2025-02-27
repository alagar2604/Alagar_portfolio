import React from 'react'

function Card({Name}) {
  return (
    <>
     <div className="col-12 col-md-6 col-lg-4">
              <div className={Name}  data-aos="zoom-in" data-aos-duration="1000">
                   
              </div>
    </div>
    </>
  )
}

export default Card