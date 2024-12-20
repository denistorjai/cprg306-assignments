"use client";
// Import Components
import { useState, useEffect } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list";
import Mealidea from "./meal-idea.js";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import { useUserAuth } from "../_utils/auth-context.js";
import { useRouter } from "next/navigation";

// Export Page
export default function Page() {

    // User Variable
    const { user } = useUserAuth();
    const router = useRouter();

    // States
    const [items, setitems] = useState([]);
    const [selected, setselected] = useState("");

    // Event Handlers
    const handleAddItem = (newItem) => {
        addItem(user.uid, newItem);
        setitems((prevItems) => [...(Array.isArray(prevItems) ? prevItems : []), newItem]);
    };

    const handleItemSelect = (itemName) => {
        const CleanedItemName = itemName
        .replace(/,.*$/, '')
        .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C[\uDC00-\uDFFF]|[\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uD83E[\uDD10-\uDDFF]|[\uD83C-\uDF00-\uFFFF]/g, '')
        .trim();
        setselected(CleanedItemName);
    };

    // Get User Item Data
    const loaditem = async () => {
        if (!user) {
            return;
        }
        
        try {
            const dbitems = await getItems(user.uid);
            setitems(dbitems);
        } catch (error) {
            return
        }
    };

    useEffect(() => {
        if (user) {
            loaditem();
        }
    }, [user]);

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
    );
}
