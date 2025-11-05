import { useState } from "react"

function FormHandling() {
    const [skills, setSkills] = useState([])
    const [gender,setGender]=useState("male")
    const [city,setCity]=useState('Dipayal')
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
                 <h1>{skills.toString()}</h1>
                <h4>select Gender :{gender}</h4>
                <input checked={gender=="male"} type="radio" name="gender" id="male" value={"male"} onChange={(event)=>setGender(event.target.value)} />Male
                <input checked={gender=="female"} type="radio" name="gender" id="female" value={"female"} onChange={(event)=>setGender(event.target.value)} />FeMale
                <hr />
                <h4>select city</h4>
                <select name="" id="" defaultValue={"ktm"} onChange={(event)=>setCity(event.target.value)}>
                    <option  value="dhangadhi">Dhangadhi</option>
                    <option value="dipayal">Dipayal</option>
                    <option value="ktm">Kathmandu</option>
                </select>
                <h2>{city}</h2>
            </form>
           
        </div>
    )
}
export default FormHandling