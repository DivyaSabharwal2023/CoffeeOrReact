import { useState } from "react"

function App() {
  const [color, setColor]=useState("olive")


  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}  >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-3xl">
          <button onClick={()=>setColor("red")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-xl "
          style={{backgroundColor: "red", color: "black", fontSize: "20px" }}>Red</button>
          
          <button onClick={()=>setColor("Blue")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-xl "
          style={{backgroundColor: "Blue", color: "black", fontSize: "20px" }}>Blue</button>

          <button onClick={()=>setColor("Green")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-xl "
          style={{backgroundColor: "Green", color: "black", fontSize: "20px" }}>Green</button>

          <button onClick={()=>setColor("Pink")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-xl "
          style={{backgroundColor: "Pink", color: "black", fontSize: "20px" }}>Pink</button>

          <button onClick={()=>setColor("Yellow")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-xl "
          style={{backgroundColor: "Yellow", color: "black", fontSize: "20px" }}>Yellow</button>

          <button onClick={()=>setColor("Orange")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-xl "
          style={{backgroundColor: "Orange", color: "black", fontSize: "20px" }}>Orange</button>

          <button onClick={()=>setColor("Brown")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-xl "
          style={{backgroundColor: "Brown", color: "black", fontSize: "20px" }}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
