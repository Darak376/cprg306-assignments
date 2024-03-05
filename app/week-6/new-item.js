"use client";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const categoryLabel = [
        { label: 'Produce', value: 'produce' },
        { label: 'Dairy', value: 'dairy' },
        { label: 'Bakery', value: 'bakery' },
        { label: 'Meat', value: 'meat' },
        { label: 'Frozen Foods', value: 'frozen foods' },
        { label: 'Canned Goods', value: 'canned goods' },
        { label: 'Dry Goods', value: 'dry goods' },
        { label: 'Beverages', value: 'beverages' },
        { label: 'Snacks', value: 'snacks' },
        { label: 'Household', value: 'household' },
        { label: 'Others', value: 'others' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name && quantity && category) {
            const newItem = {
                name,
                quantity,
                category,
            };

          
            onAddItem(newItem);

            
            setName('');
            setQuantity(1);
            setCategory('produce');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <main className="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="p-4 m-4 bg-gray-200 text-black max-w-md w-full rounded-lg shadow-md">
                <div className="mb-4">
                    <input
                        type="text"
                        required
                        placeholder="Item name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-between mb-4">
                    <input
                        type="number"
                        required
                        min="0"
                        max="99"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-1/2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <select
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-1/2 ml-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                        {categoryLabel.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Add new item
                </button>
            </form>
        </main>
    );
}

export default NewItem;
