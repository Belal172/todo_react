import { useEffect, useState } from "react"

export default function Contact() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getUserData()
  }, [])
  async function getUserData() {
    const url = "https://dummyjson.com/users"
    try {
      let response = await fetch(url)
      response = await response.json()
      //console.log(response)
      setData(response.users)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }

  }
  return (
    <>
      <h1>Users data</h1>
      {
        !loading ?
           data.map((user, index) => (
            <ul key={index} className="list">
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
              <li>{user.age}</li>

            </ul>
          ))
        :  <img src="data:image/png;base64,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" alt="Loading data..." />
      }

    </>
  )
}

