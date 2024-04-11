"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../utils/auth-context";

function Page() {
  const { user } = useUserAuth();
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

  if (!user) {
    return null;
  }

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
