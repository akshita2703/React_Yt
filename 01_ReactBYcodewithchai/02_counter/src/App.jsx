import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter] = useState(0)
 
  // let counter = 15

  const addValue = ()=>{
    console.log(counter);
    // counter = counter+1;
    setCounter(counter+1)
    // setCounter(counter+1)  adding multiple times won't change anything 
    // setCounter(counter+1)
  }
  
  const removeValue = ()=>{
    console.log(counter);
    
    counter = counter-1;
    if(counter<0){
      counter=0
    }
    setCounter(counter)
  }
  return (
    <>
    <h1> React </h1>
    <h2>Counter value:{counter}</h2>
    <button
    onClick={addValue}>Add Value</button>
    <br />
    <br />
    <button  onClick={removeValue}>Remove value</button>

        
    </>
  )
}

export default App
