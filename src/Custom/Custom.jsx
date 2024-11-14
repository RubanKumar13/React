import React, { useState } from 'react'

function Custom() {

    const Names = ["alice","bob","charlie"];
    const [search,setsearch] = useState("");

    const filter = Names.filter((names)=>{
        names.toLowerCase().includes(search.toLowerCase())
    });
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

export default Custom