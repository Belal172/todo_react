import { useTransition } from "react"

function User({ u }) {
    const [pending, startTransition] = useTransition()
    const hnadle=()=>{
 startTransition (async ()=>{
    await new Promise(response=>setTimeout(response,2000))
        
   })
    }
  
    return (
        <div>
            <h1>My name is {u.userName}</h1>
            {
                pending? 
                <img style={{width:'200px'}} src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJ6ZGIxdjJhczI0eHZ6Y2Z0dHBmNnhiY3o3MmRrdDhlM24xMXFnayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.gif" alt="" />
                :null
            }
            <button disabled={pending} onClick={hnadle}>Load</button>
        </div>
    )
}
export default User