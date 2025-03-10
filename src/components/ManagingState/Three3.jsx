import React, { useState } from 'react'
import { foods, filterItems } from './data1'

function SearchBar({query, handleQuery}) {

  return (
    <label>
      Search: 
      <input type="text" value={query} onChange={handleQuery}/>
    </label>
  )
}

function List( {items} ) {

  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Three3 = () => {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query)

  function handleQuery(e){
    setQuery(e.target.value);
  }

  return (
    <div>
      <SearchBar query={query} handleQuery={handleQuery}/>
      <List items={results}/>

    </div>
  )
}

export default Three3