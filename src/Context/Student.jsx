import React, { useContext } from 'react'
import { StudentCons } from './Context'
import Contact from './Contact'

function Student() {

  const {Sub} = useContext(StudentCons)
  return (
    <>
    <h1>Subject Details</h1>
    <ul>
        {Sub.map((subs,index)=>{
            return <li key={index}>{subs}</li>
        })}
    </ul>
    <Contact />
    </>
  )
}

export default Student