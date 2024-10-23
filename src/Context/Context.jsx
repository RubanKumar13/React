import React, { createContext } from 'react'
import Student from './Student';

const studentdata ={
  sname:"alex",
  age:"16",
  dep:"CSE",
  Sub:["Maths","Computer","English"],
  contact:{phoneno:123456789,address:"chennai"},
};


export const StudentCons = createContext(studentdata);

function Context() {



  return (
    <>
    <StudentCons.Provider value={studentdata}>
      <h1>Student Details</h1>
     <div>Name is {studentdata.sname}</div>
     <div>Age is {studentdata.age}</div>
     <div>Department is {studentdata.dep}</div>
     <Student  />
    </StudentCons.Provider>
     
    </>
  )
}

export default Context