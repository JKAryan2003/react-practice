import React from 'react'
import { movies } from './dataTwo'

const Two = () => {
  return (
    <>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie}>
              
              <h3>{movie.name}</h3>
              <img src={movie.imgLink} alt={movie.name} width="20%" height="20%"/>
              <p>{movie.description}</p>
              <p>{movie.rating}</p>
              <button>
                Watch Now
              </button>
            </li>
          )
        }) }
      </ul>
    </>
  )
}

export default Two