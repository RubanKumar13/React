import React, { useEffect } from 'react'

function Effect() {
    
  //  const [input,setInput] = useState("");
  //  const acees = useRef(); 
  //  console.log(acees)
  
useEffect()(()=>{
  console.log("Hi")
})

  return (
    <>
     <h1>UseEffect Example</h1>
     {/* <input type="text" ref={acees} value={input} onChange={(x)=>setInput(x.target.value)} /> 
     <p>Input Value: {input}</p> */}
    </>
  )
}

export default Effect