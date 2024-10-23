import React, { useEffect, useRef, useState } from 'react'

function Usestate() {
   
  


  console.log("hi");
  var product = [
    {id:1,pname:"apple",price:"40,000"},
    {id:2,pname:"Samsung",price:"50,000"},
    {id:3,pname:"Oppo",price:"60,000"},
    {id:4,pname:"Moto",price:"70,000"},
    {id:5,pname:"Redmi",price:"80,000"},
    {id:5,pname:"Redmi",price:"80,000"},
  ]  
   
 const intialize = useRef(true);
 console.log(intialize)

  const [count,setcount] = useState(0);
 useEffect(()=>{
   if(intialize.current){
    intialize.current = false;
    return;
 }
    console.log("Hi Message from Useffect");
 },[count])

   var plus =()=>{
    if(count>=0){
        setcount(count+1);
    }
   }
   var minus =()=>{
    if(count>0){
        setcount(count-1);
    }
   }
   var reset =()=>{
    setcount(0);
   }
   const [newproducts,setProduct] = useState(product)
   const [total,settotal] = useState(product.length)
  
   var erase = (id)=>{
    var v = newproducts.filter((x)=>x.id !== id);
    setProduct(v);
    settotal(v.length);
    
   }

   var eraseall =()=>{
    setProduct([]);
    settotal(0);
   }
  return (
    <>r
     <div className="container">
     <h1>count is:{count}</h1>
     <div>
     <button className='btn btn-primary m-2' onClick={plus}>Increment</button> 
     <button className='btn btn-danger m-2' onClick={minus}>Decrement</button>    
     <button className='btn btn-warning m-2' onClick={reset}>Reset</button>
     <h1>Item in Cart is :{total}</h1>    
     </div>
        {newproducts.map((v)=>(
            <>
            <div className="card  m-3">
            <p>{v.pname}</p>
            <p>{v.price}</p>
            <div >
            <button className='btn btn-danger' onClick={()=>{
                 erase(v.id)
            }}>Delete</button>
            </div>
            </div>
          
            </>
        ))}
        <button className='btn btn-danger' onClick={eraseall} >delete all</button>
        <input type="text" ref={intialize} />
     </div>
         
    </>
  )
}

export default Usestate