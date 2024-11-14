import React from 'react'
import { useFilter } from './useFilter';

function Custom1() {
    const Names = ["alice","bob","charlie"];
   
    const {filter,search,setsearch} = useFilter(Names);
  return (
    <>
      <h1>Custom Hooks</h1>
     <input 
     type="text"
     placeholder='Search Name'
     value={search}
     onChange={(e)=>setsearch(e.target.value)}
     />
     <h2>Filtered Names</h2>
     <div>
        {filter.map((names,index)=>{
            <p key={index}>{names}</p>
        })}
     </div>
    </>
  )
}

export default Custom1