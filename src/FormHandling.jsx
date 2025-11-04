import { useState } from "react"

function FormHandling() {
    const [skills, setSkills] = useState([])
    const handleSkills=(event) => {
        console.log(event.target.value)
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])

        }

    }
    return (
        <div>
            <h1>form Handling checkbox</h1>
            <form action="">
                <input onChange={handleSkills} type="checkbox" id="php" value="php" />
                <label htmlFor="php">PHP</label><br />
                <input onChange={handleSkills} type="checkbox" id="java" value="java" />
                <label htmlFor="java">JAVA</label><br />
                <input onChange={handleSkills} type="checkbox" id="js" value="js" />
                <label htmlFor="js">JS</label>
            </form>
            <h1>{skills.toString()}</h1>
        </div>
    )
}
export default FormHandling