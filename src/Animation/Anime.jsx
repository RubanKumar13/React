import React from 'react'
import confetti from 'canvas-confetti'
function Anime() {
  
  const confettibtn = () =>{
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 0.5, y: 0.5 }
    })
  }  

  return (
    <>
    <button onClick={confettibtn} >Click me</button>
    </>
  )
}

export default Anime