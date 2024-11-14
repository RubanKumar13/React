import React, { useCallback, useEffect, useState } from 'react'

function Callback() {
    const [count,setcount] = useState(0);
    const [change,setchange] = useState(0);

    const increment = useCallback(()=>{
        setcount(count+1);
    },[count])
    const increment1 = ()=>{
        setchange(change +1);
    }

    // store a function into a memory

    useEffect(()=>{
        console.log("Count1 value is changed");
    },[increment]);

  return (
    <>
     <h1>useCallback Hook</h1>
     <h2>count 1</h2>
     <p>Count is :{count}</p>
     <button onClick={increment}>Increment</button>
     <h2>count 2</h2>
     <p>Count is:{change}</p>
     <button onClick={increment1}>Increment</button>
    </>
  )
}

export default Callback