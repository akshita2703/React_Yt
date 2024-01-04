import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Akshita",
    Age : 20
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-7'> Tailwind test</h1>
      {/* <Card someObd={myObj}/>    */}
      <Card username="Akshita Rastogi"  btnText= "clickme"/> 
      <Card username="Akshita Rastogi"  />   
    </>
  )
}

export default App
