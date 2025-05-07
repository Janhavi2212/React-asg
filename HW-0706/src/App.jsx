import { useState } from 'react'
import './App.css'
import Child from './components/Child'

function App() {
  console.log("App is rendered")
  const [count, setCount] = useState(0)
  const [flag,setFlag]=useState(false)

  return (
    <div style={{backgroundColor:flag?"white":"black",color:flag?"black":"white"}}>

      <Child count={count} setCount={setCount}/>
      <button onClick={()=>setFlag(!flag)}>{flag? "Light-Mode": "Dark-Mode"}</button>

    </div>
  )
}

export default App
