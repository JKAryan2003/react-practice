import React from 'react'

function Profile (props) {
  return (
    <>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Post : {props.post}</p>
      <p>{props.greeting}</p>
      {props.children}
    </>
  )
}

const Three = () => {
  return (
    <>
      <Profile 
      name="Aryan" 
      age={21} 
      post="student"
      greeting={
        <div>
          <strong>Hello {name}</strong>
        </div>
      }>
        Hobbies : Cricket, Watching Movies
      </Profile>

      <Profile 
      name="Subhranshu" 
      age={21} 
      post="teacher"
      greeting={
        <div>
          <strong>Hello {name}</strong>
        </div>
      }>
        Hobbies : Cricket, Watching Movies, Singing
      </Profile>
    </>
  )
}

export default Three