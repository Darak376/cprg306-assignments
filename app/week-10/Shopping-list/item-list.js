import React, { useState } from 'react';
import Item from './item'; 
const ItemList = ({ items, onItemSelect }) => {
  
  const [sortOrder, setSortOrder] = useState('default');
  const sortItems = () => {
    return items;
  };

  const renderSortingButtons = () => {
  };

  const renderItems = () => {
    const sortedItems = sortItems();

    return (
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderSortingButtons()}
      {renderItems()}
    </div>
  );
};

export default ItemList;
