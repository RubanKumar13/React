import React from 'react'
import Student1 from './Student1';
import Reduce from '../Reduce/Reduce.jsx'
const studentdata ={
    sname:"alex",
    age:"16",
    dep:"CSE",
    Sub:["Maths","Computer","English"],
    contact:{phoneno:123456789,address:"chennai"},
};
Reduce()

function Context1() {
  return (
    <>
     <h1>Student Details</h1>
     <div>Name is {studentdata.sname}</div>
     <div>Age is {studentdata.age}</div>
     <div>Department is {studentdata.dep}</div>
     <Student1 {...studentdata}  />
    </>
  )
}

export default Context1