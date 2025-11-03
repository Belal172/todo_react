import { useState } from "react"
import Counter from "./Counter"
function Game(){
    const [play,setPlay]=useState("Football")
    const handle=() =>{
        setPlay("VOLLEYBALL")
    }
    return (
        <div><h1>using satate</h1>
        <h2>{play}</h2>
        <button onClick={handle}>Change</button>
        <Counter />
        </div>
        
    )
}
export default Game