import React from 'react';

const Item = ({ item, onSelect }) => {
  const handleItemClick = () => {
    onSelect(item);
  };

  return (
    <ul className="border border-blue-700 bg-yellow-300 text-black rounded-lg" onClick={handleItemClick}>
      <h1>{item.name}</h1>
      <div>Quantity: {item.quantity}</div>
      <div>Category: {item.category}</div>
    </ul>
  );
};

export default Item;
