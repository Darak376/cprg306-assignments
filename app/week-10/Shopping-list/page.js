import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "./shopping-list-service";

function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const fetchedItems = await getItems();
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(newItem);
      setItems((prevItems) => [...prevItems, { id: newItemId, data: newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
