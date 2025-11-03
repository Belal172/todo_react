import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const user = {
    userName: "Milan Belal",
    email: "milanbelal007@gmail.com",
    age: 23
  }

  const userArr = ['HAri', 'Ram', 'MAdhav']
  function Fruit() {
    return "Apple"
  }
  const imgPath="https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg"
  function operation(a, b, op) {

    if (op == "+") {
      return a + b
    }
    else if (op == "-") {
      return a - b
    }
    return a * b
  }

  function callMe(){
     alert("functon called")
  }

  const hello=()=>{
    alert("hello")
  }

  const god=(name)=>{
    alert(name)
  }
  return (

    <div><h1>hello react</h1>
      <h2>My name is {user.userName ? user.userName : "name not found"}</h2>
      <h3>I love {Fruit()}</h3>
      <h3>the operation result is {operation(10, 30)}</h3>
      the third user is {userArr[2]}
      <br />

      {/* <img src={imgPath} alt="img here" /> */}
      <button onClick={callMe}>click me</button>
      <button onClick={()=>god("shiva")}>Shiva</button>
      <User u={user}/>
    </div>
  )
}

export default App
