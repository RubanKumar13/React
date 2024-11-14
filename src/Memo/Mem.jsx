import React, {  useMemo, useState } from 'react'

function Mem() {

    const [sort,setsort] = useState("asc");
    const [item,setitem] = useState([5,3,4,8,1,2,7,12,40]);
    
    // without use memo
    // const sortitem = item.sort((a,b)=>{
    //     console.log("sorting the number"); 
    //     return sort === "asc" ? a-b : b-a;
    // });

    //With UseMEMO 
     const sortitem = useMemo(()=>{
        console.log("sort with usememo");
       return item.sort((a,b)=>{
            
            return sort === "asc" ? a-b : b-a;
        });
     },[item,sort])
  return (
    <>
    <h1>useMemo Hook</h1>
    <div>{sortitem}</div>
    <button onClick={()=> setsort(sort === "asc" ? "desc" : "asc")}>Toggle</button>
    </>
  )
}

export default Mem