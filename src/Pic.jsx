import React from 'react'
import Card from './Card'

function Pic() {
  return (
    <>
    <div className="container-fluid  p-3 " id='service' >
       <div className="row g-4">
         <Card Name="card1"/>
         <Card Name="card2"/>
         <Card Name="card3"/>
         <Card Name="card4"/>
         <Card Name="card5"/>
         <Card Name="card6"/>
       </div>
    </div>
    </>
  )
}

export default Pic