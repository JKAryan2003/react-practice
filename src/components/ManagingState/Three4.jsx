import React, { createContext, useState } from 'react'
import ClassA from './ClassA'

const ThemeContext = createContext();

const Three4 = () => {

  const [theme, setTheme] = useState('beige');

  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor: theme==="beige" ? "beige" : "black"}}>
          <ClassA />
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default Three4
export { ThemeContext }