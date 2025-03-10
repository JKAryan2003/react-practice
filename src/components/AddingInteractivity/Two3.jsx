import React, { useState } from 'react'

const Two3 = () => {

  const [fName, setFname] = useState('')
  const [lName, setLname] = useState('')

  function handleFirstNameChange(e) {
    setFname(e.target.value)
  }

  function handleLastNameChange(e) {
    setLname(e.target.value)
  }

  function resetChange() {
    setFname('')
    setLname('')
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder='First Name' value={fName} onChange={handleFirstNameChange} />
        <input type="text" placeholder='Last Name' value={lName} onChange={handleLastNameChange} />
      </form>

      <p>Hello {fName} {lName}</p>

      <button onClick={resetChange}>
        Reset
      </button>
    </div>
  )
}

export default Two3