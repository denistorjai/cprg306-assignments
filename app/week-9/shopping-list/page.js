"use client"
// Import Components
import { useState } from "react"
import NewItem from "./new-item.js"
import ItemList from "./item-list"
import Mealidea from "./meal-idea.js"

const itemsData = require('./items.json')

// Export Page
export default function Page(){

    // States
    const [items, setitems] = useState(itemsData)
    const [selected, setselected] = useState("")

    // Event Handlers
    const handleAddItem = (newItem) => {
        setitems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const CleanedItemName = itemName
        .replace(/,.*$/, '')
        .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C[\uDC00-\uDFFF]|[\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uD83E[\uDD10-\uDDFF]|[\uD83C-\uDF00-\uFFFF]/g, '')
        .trim();
        setselected(CleanedItemName)
    };

    return (
        <div className="p-10 flex flex-row ">
            <div>
                <h1 className="text-3xl font-bold m-2"> Shopping List </h1>
                <NewItem handleAddItem={handleAddItem} />
                <ItemList itemdata={items} onItemSelect={(itemName) => handleItemSelect(itemName)} />
            </div>
            <div>
                <h1 className="text-3xl font-bold m-2"> Meal List </h1>
                <Mealidea ingredient={selected} />
            </div>
        </div>
    )
}