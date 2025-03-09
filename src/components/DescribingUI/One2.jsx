import React from 'react'

function Item( {name, importance} ) {
  return (
    <>
      <li>
        {name}
        {importance > 0 && ' '}
        {importance > 0 &&
          <i>(Importance: {importance})</i>
        }
      </li>
    </>
  )
}

const One2 = () => {
  return 
  (
    <>
      <h1>List</h1>
      <ul>
        <Item name="Space suit" importance={9}/>
        <Item name="Helmet with a golden leaf" importance={0}/>
        <Item name="Photo of Tam" importance={10}/>
      </ul>
    </>
  )
}


export default One2