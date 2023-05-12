
import React from 'react'

const FuncEventBinding = () => {

   function  clickHandler() 
   {
     console.log("button is clicked");
    }
    

  return (
    <div>
    <button onClick={clickHandler}>
      Click me
    </button>
  </div>
  )
}

export default FuncEventBinding;
