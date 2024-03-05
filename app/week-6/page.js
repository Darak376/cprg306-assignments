"use client";
import { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';

function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-blue-300">
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-400">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

export default Page;
