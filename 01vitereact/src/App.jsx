import Coffee from "./Coffee"
function App() {
  

  return (   // Adjacent jsx elements must be wrapped in an enclosing tag. Thats where fragmentation comes in.
                      // this is called fragment
    <>
    <Coffee/>
    <h1> Coffee Or React</h1>
    <p> Testing Fragmentation</p>
        
    </>
      
    

  )
}

export default App
