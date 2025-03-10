import React, { useContext } from 'react'
import { ThemeContext } from './Three4'

const ClassB = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  function handleClick() {
    if (theme == "beige"){
      setTheme("dark")
    }else {
      setTheme("beige")
    }
  }
 
  return (
    <div>
      <button onClick={handleClick}>
        Change Theme
      </button>
    </div>
  )
}

export default ClassB