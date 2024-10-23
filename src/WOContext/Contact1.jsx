import React from 'react'

function Contact1({con:{phoneno,address}}) {
  return (
    <>
     <h1>Contact Information</h1>
     <div>Phone no is {phoneno}</div>
     <div>Address is {address}</div>
    </>
  )
}

export default Contact1