import React, { useReducer, useState } from 'react'

export function reducefn(state,action){
   switch (action.type){
    case 'increment':
        return {count:state.count +1};
    case 'decrement':
        return {count:state.count - 1};
    default:
        return state;    
   }
}



function Reduce() {
    
    const [state,dispatch] = useReducer(reducefn,{Count:1});
    const [count1,setcount1] = useReducer(reducefn,1);
    const [count,setcount] = useState(0);
    const [Variablename,Function] = useState("");
    

    // var a = setcount(count+1);
    var plus =()=>{
             
        // a;
            // setcount(count+1);
            dispatch({type:'increment'});
        
       }
       var minus =()=>{
         a
            // setcount(count-1);
            dispatch({type:'decrement'});
        
       }
    console.log(state)

  return (
   <>
   <div>
    <button className='btn btn-primary m-2' onClick={plus}>Increments</button>
    <p>{state.count}</p> 1
    <button className='btn btn-danger m-2' onClick={minus}>Decrement</button> 
   </div>
   </>
  )
}

export default Reduce