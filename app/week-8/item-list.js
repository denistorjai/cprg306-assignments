"use client"

// Component Imports
import { useEffect, useState } from "react";
import Item from "./item";

// Map & Render Item List & Export Function
export default function ItemList({ itemdata, onItemSelect }) {

  // State Variables
  const [sort, setsort] = useState("name")

  // Sort Items
  const sortItems = (unsorted) => {

    if (sort === "name") {
      return unsorted.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === "category") {
      return unsorted.sort((a, b) => a.category.localeCompare(b.category))
    }
    
    return unsorted;

  };

  // Update Sort Items
  const sortedItems = sortItems([...itemdata]);

  return ( 
      <div>
        <button className={`w-32 h-8 m-3 rounded ${sort === "name" ? "bg-sky-500 text-white" : "bg-white text-black"}`} 
        onClick={() => setsort("name")}> Sort by Name </button>
        <button className={`w-32 h-8 m-3 rounded ${sort === "category" ? "bg-sky-500 text-white" : "bg-white text-black"}`} 
        onClick={() => setsort("category")}> Sort by Category </button>
        <div> 
          {sortedItems.map((item, index) => (
              <Item
                  key={index}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={() => onItemSelect(item.name)}
              />
          ))}
        </div> 
      </div>
  );
}
