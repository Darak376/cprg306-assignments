"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (selectedItem) => {
    const cleanedItemName = selectedItem.name
      .replace(/ 🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼|/g, "")
      .split(",")[0];
    
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-blue-300 flex justify-between">
      <div className="w-1/2 p-6">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 p-6">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
