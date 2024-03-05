"use client";
import ItemList from "./item-list";

function Page() {
  return (
    <main className="bg-blue-300">
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-400">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}

export default Page;
