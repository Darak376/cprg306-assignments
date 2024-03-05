import { useState } from "react";
import Item from "./item";

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState("name");

  const SortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const sortItems = (items, sortBy) => {
    const itemsCopy = [...items];
    itemsCopy.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
    });

    return itemsCopy;
  };

  return (
    <div className="max-w-screen-md mx-auto p-4 border-2 border-blue-100 bg-gray-600 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-yellow-200">
        Item List
      </h1>
      <div className="flex items-center space-x-4 mb-4">
        <label className="mr-2">Sort By:</label>
        <button
          onClick={() => SortChange("name")}
          className={`px-4 py-2 border rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => SortChange("category")}
          className={`px-4 py-2 border rounded ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
        >
          Category
        </button>
      </div>
      <div className="grid gap-4">
        {sortItems(items, sortBy).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
