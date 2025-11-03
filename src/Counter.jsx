import { useState } from "react"
import Hello from "./Hello"

const Counter=()=>{
    const [count,setCount]=useState(0)
    const [rcount,setRcount]=useState(10)
    const [display,setDispaly]=useState(true)
    return(
        <div>
            <h2>counter:{count}</h2>
            <h2>rCounter: {rcount}</h2>
            <button onClick={()=>setCount(count+1)}>count</button>
            <button onClick={()=>setRcount(rcount -1)}>Rcount</button> <br />

            <button onClick={()=>setDispaly(!display)}>toogle</button>
            {
              display?  <Hello />:null
            }

        </div>
    )
}
export default Counter