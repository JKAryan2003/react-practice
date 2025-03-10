import React, { useState } from 'react'

function Input({value, onChange, label}) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  )
}

const Three2 = () => {
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div>
      <Input value={text} onChange={handleChange} label="First Input" />
      <Input value={text} onChange={handleChange} label="Second Input" />
    </div>
  )
}

export default Three2