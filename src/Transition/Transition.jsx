import React, { useState, useTransition } from 'react'

function Transition() {
    const [inputs,setInput] = useState('');
    const [list,setList] = useState([]);
    
    const[ispending,settranstion] = useTransition();
    
    const List_Size = 10000;

    function handlechange(e){
    settranstion(()=>{
      setInput(e.target.value)
      const l=[]
      for(let i=0;i<List_Size;i++){
         l.push(e.target.value)
      }
      setList(l)
    
    })
    }

  return (
    <>
     <h1>Transition Effect</h1>
     <input type="text" value={inputs} onChange={handlechange} />
     
     {ispending ? "loading"
       :list.map((item,index)=>{
        return <div key={index}>{item}</div>
     })}
    </>
  )
}

export default Transition