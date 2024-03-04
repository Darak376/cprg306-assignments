// Import necessary dependencies and components
import React, { useState } from 'react';

// NewItem component definition
const NewItem = ({ onAddItem }) => {
  // State variables to manage form inputs
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object with a random id
    const newItem = {
      id: generateRandomId(),
      name,
      quantity: parseInt(quantity, 10), // Convert quantity to an integer
      category,
    };

    // Invoke the onAddItem prop with the new item object
    onAddItem(newItem);

    // Clear the form inputs
    setName('');
    setQuantity('');
    setCategory('');
  };

  // Function to generate a random id (replace it with a more robust implementation if needed)
  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  // JSX for the NewItem component
  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default NewItem;
