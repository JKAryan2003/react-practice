import React from 'react'

const One = () => {

  const name = "From"
  const rating = "8.9"
  const imgLink = "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23817967_b_v13_ab.jpg"
  const about = "Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normality and seek a way out, they must also survive the threats of the surrounding forest"

  let age = 16;

  const returnGenre = () => {
    const genre = "Horror";
    return genre
  }

  return (
    <>
      <p>Name : {name}</p>
      <img src={imgLink} alt="From" width="20%" height="20%"/>
      <p>Rating : {rating}</p>
      <p>Genre : {returnGenre()}</p>
      <p>About : {about}</p>

      <button>
        { age>= 18 ? "Watch Now" : "You can't watch" }
      </button>
    </>
  )
}

export default One