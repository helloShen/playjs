import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }
  
  return (
    <>
      <SearchBar
        query={query}
        changeCallback={handleChange}
      />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

function SearchBar({ query, changeCallback }) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={changeCallback}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table> 
      {items.map(food => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}
