import React from 'react'
import Contact1 from './Contact1'

function Student1({Sub,contact}) {
  
  return (
    <>
    <h1>Subject Details</h1>
    <ul>
        {Sub.map((subs,index)=>{
            return <li key={index}>{subs}</li>
        })}
    </ul>
    <Contact1 con={contact} />
    </>
  )
}

export default Student1