"use client"
// Import Components
import { useState } from "react"
import NewItem from "./new-item.js"
import ItemList from "./item-list"

const itemsData = require('./items.json')

// Export Page
export default function Page(){

    // States
    const [items, setitems] = useState(itemsData)

    // Event Handlers
    const handleAddItem = (newItem) => {
        setitems([...items, newItem]); // Adds newItem to the items array
    };

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold m-2"> Shopping List </h1>
            <NewItem handleAddItem={handleAddItem} />
            <ItemList itemdata={items} />
        </div>
    )
}