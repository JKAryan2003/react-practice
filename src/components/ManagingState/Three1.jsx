import React, { useState } from 'react'

const Three1 = () => {

  const [isEditing, setEditing] = useState(false)
  const [firstName, setFirstName] = useState('Jane')
  const [lastName, setLastName] = useState('Jacobs')

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        setEditing(!isEditing)
      }}>

        <label>
          First name:
          {isEditing ? (
            <input
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value)
              }}
            />
          ) : (
            <b>{firstName}</b>
          )}
        </label>
        <label>
          Last name:
          {isEditing ? (
            <input
              value={lastName}
              onChange={e => {
                setLastName(e.target.value)
              }}
            />
          ) : (
            <b>{lastName}</b>
          )}
        </label>
    
        <button type='submit'>
          {isEditing ? 'Save' : 'Edit'}
        </button>

        <p>Hello {firstName} {lastName}</p>
      </form>
    </div>
  )
}

export default Three1