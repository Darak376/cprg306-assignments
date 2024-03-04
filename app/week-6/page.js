// Import necessary dependencies and components
import { useState } from 'react';
import NewItem from './NewItem';
import ItemList from './ItemList';
import itemsData from './items.json';

// Use the "use client" directive
import { useApolloClient } from '@apollo/client';

function Page() {
  // Initialize state variable with data from items.json
  const [items, setItems] = useState(itemsData);

  // Use the Apollo Client
  const client = useApolloClient();

  // Event handler function to add a new item to items
  const handleAddItem = (newItem) => {
    // Update the local state
    setItems((prevItems) => [...prevItems, newItem]);

    // Update the cache using Apollo Client
    client.writeQuery({
      query: GET_ITEMS, // Assuming you have a query to fetch items
      data: { items: [...items, newItem] },
    });
  };

  // Render function to display NewItem and ItemList components
  return (
    <div>
      <h1>Shopping List App</h1>
      {/* Pass the handleAddItem event handler to NewItem component */}
      <NewItem onAddItem={handleAddItem} />
      {/* Pass the items state to ItemList component */}
      <ItemList items={items} />
    </div>
  );
}

export default Page;
