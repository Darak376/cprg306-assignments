// Import necessary dependencies and components
import { useState } from 'react';
import Item from './item';

// ItemList component definition
const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  // Function to create a copy of items and sort it based on sortBy
  const sortedItems = () => {
    return [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
    });
  };

  // Event handler to change the sorting preference
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  // JSX for the ItemList component
  return (
    <div>
      <h1>Item List</h1>
      <div>
        <label>Sort By:</label>
        <button
          onClick={() => handleSortChange('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
        >
          Name
        </button>
        <button
          onClick={() => handleSortChange('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems().map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
