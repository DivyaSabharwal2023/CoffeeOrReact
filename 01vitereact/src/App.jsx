import Coffee from "./Coffee"
function App() {
  const username="divya"
   
  return (   // Adjacent jsx elements must be wrapped in an enclosing tag. Thats where fragmentation comes in.
                      // this is called fragment
    <>                       
    <Coffee/>
    <h1> Coffee Or React {username} </h1>
    <p> Testing Fragmentation</p>
        
    </>
      
    

  )
}

export default App
