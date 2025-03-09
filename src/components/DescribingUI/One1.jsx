import React from 'react'
import { getImageUrl } from './utils'

export const One1 = ({person}) => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <div>
        <h1>{person.name}</h1>
        <img src={getImageUrl(person.imageId)} alt={person.name} />
        <ul>
          <li>Profession : {person.profession}</li>
          <li>Awards : {person.awards}</li>
          <li>Discovered : {person.discover}</li>
        </ul>
      </div>
    </div>
  )
}
