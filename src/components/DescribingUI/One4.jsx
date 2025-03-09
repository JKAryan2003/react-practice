import { people } from "./data1";
import { getImageUrl } from "./utils";

import React from 'react'

function Chemists() {
  const chemists = people.filter(person => person.profession === "chemist")
  const listItemsChemists = chemists.map(chemist => 
    <li>
       <img
        src={getImageUrl(chemist)}
        alt={chemist.name}
      />
      <p>
        <b>{chemist.name}:</b>
        {' ' + chemist.profession + ' '}
        known for {chemist.accomplishment}
      </p>
    </li>
  )
  console.log(chemists);
  
  return (
    <div>
      <h1>Chemists</h1>
      <ul>
        {listItemsChemists}
      </ul>
      
    </div>
  )
}

function OtherProfession() {
  const otherProfession = people.filter(person => person.profession !== "chemist")
  const listItemsOthers = otherProfession.map(other => 
    <li>
       <img
        src={getImageUrl(other)}
        alt={other.name}
      />
      <p>
        <b>{other.name}:</b>
        {' ' + other.profession + ' '}
        known for {other.accomplishment}
      </p>
    </li>
  )

  return (
    <div>
      <h1>Others</h1>
      <ul>
      {listItemsOthers}
      </ul>
    </div>
  )
}

const One4 = () => {

  return (
    <div>
      <h1>Scientists</h1>
      <Chemists />
      <OtherProfession />
    </div>
  )

}

export default One4