import { useState } from "react"

function ArrayUpdate() {
    const [data, setData] = useState([
        {name:"milan",age:"23"},
        {name:"Shyam",age:"23"},
        {name:"Hari",age:"24"}
    ])

    const handleData=(age)=>{
       data[data.length-1].age=age
       setData([...data])
    }
    return (
        <div>
            <h1>updating arrey in objects</h1>
            <input type="text" placeholder="Enter last age" onChange={(event)=>handleData(event.target.value)} />
            {
                data.map((item,index)=>(
                    <h3 key={index}> {item.name}, {item.age}</h3>
                ))
            }
        </div>
    )
}
export default ArrayUpdate