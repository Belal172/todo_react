import { useEffect, useState } from "react"

export default function Contact() {
  const [data, setData] = useState([])
  useEffect(() => {
    getUserData()
  }, [])
  async function getUserData() {
    const url = "https://dummyjson.com/users"
    let response = await fetch(url)
    response = await response.json()
    console.log(response)
    setData(response.users)

  }
  return (
    <>
      <h1>Users data</h1>
      {
        data && data.map((user,index) => (
          <ul key={index} className="list">
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
            
          </ul>
        ))

      }

    </>
  )
}

