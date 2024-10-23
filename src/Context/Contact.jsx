import React, { useContext } from 'react'
import { StudentCons } from './Context'

function Contact() {
    const{contact:{phoneno,address}} = useContext(StudentCons);
  return (
    <>
     <h1>Contact Information</h1>
     <div>Phone no is {phoneno}</div>
     <div>Address is {address}</div>
    </>
  )
}

export default Contact