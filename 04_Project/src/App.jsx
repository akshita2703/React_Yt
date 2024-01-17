import { useState } from "react"


function App() {
  const [color, setColor] = useState("skyblue")

  return (
   
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}} 
      >
        <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2 "> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-4 py-2 rounded-2xl bg-slate-400">
          <button onClick={()=> setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-cyan-50 shadow-xl"
          style={{backgroundColor:"red"}}> RED</button>
          <button onClick={()=> setColor("green")}className="outline-none px-4 py-1 rounded-full text-cyan-50 shadow-xl"
          style={{backgroundColor:"green"}}> GREEN</button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-cyan-50 shadow-xl"
          style={{backgroundColor:"blue"}}> BLUE </button>
          <button onClick={()=> setColor("black")} className="outline-none px-4 py-1 rounded-full text-cyan-50 shadow-xl"
          style={{backgroundColor:"black"}}> BLACK </button>
          <button onClick={()=> setColor("gray")} className="outline-none px-4 py-1 rounded-full text-cyan-50 shadow-xl"
          style={{backgroundColor:"gray"}}> GRAY </button>
          </div> 
        </div>
      </div>
      
   
    
  )
}

export default App
