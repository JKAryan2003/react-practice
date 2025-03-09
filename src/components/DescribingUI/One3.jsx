import React from 'react'

function Drink( {name} ) {

  let part, caffeine, age

  if (name === "leaf") {
    part = "leaf"
    caffeine = "15–70 mg/cup"
    age = "4,000+ years"
  }
  else {
    part = "bean"
    caffeine = "80–85 mg/cup"
    age = "1,000+ years"
  }

  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>Part of the plant
          <ul>
            <li>{part}</li>
          </ul>
        </li>
        <li>Caffeine content
          <ul>
            <li>{caffeine}</li>
          </ul>
        </li>
        <li>Age
          <ul>
            <li>{age}</li>
          </ul>
        </li>
      </ul>
    </div>
  )

}

const One3 = () => {
  return (
    <div>
      <Drink name="leaf" />
      <Drink name="bean" />
    </div>
  )
}

export default One3