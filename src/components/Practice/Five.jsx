import { Linter } from 'eslint'
import React from 'react'

const Five = () => {

  const users = [
    { name: "Alice", age: 23 },
    { name: "Bob", age: 33 },
    { name: "Charlie", age: 21 },
    { name: "Angels", age: 29 },
    { name: "Denver ", age: 34 }
  ]

  const [peoples, setPeople] = useState([])

  function addPeople () {
    users.forEach((user) => {
      setPeople(peoples.push(user))
    })

    return peoples
  }


  return (
    <div>
      <button onClick={addPeople}>
        Add 
      </button>

      <ul>
        {
          peoples.map((people) => 
            <li>{people}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Five