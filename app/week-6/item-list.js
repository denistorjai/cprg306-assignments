"use client"

// Component Imports
import { useEffect, useState } from "react";
import Item from "./item";

// Map & Render Item List & Export Function
export default function ItemList() {

  // Get Items
  const ItemsJson = require('./items.json')
  const SortedItems = []

  // State Variables
  const [sort, setsort] = useState("name")
  const [sorteditems, setsorteditems] = useState([])

  // Sort Items
  const sortitems = () => {

    // Copy Table into Array
    let unsorted = [...ItemsJson]

    // Sort Items by Name or Category
    if (sort == "name") {
      setsorteditems(unsorted.sort((a,b) => a.name.localeCompare(b.name)))
    } else if (sort == "category") {
      setsorteditems(unsorted.sort((a,b) => a.category.localeCompare(b.category)))
    }

  }

  // On Button Click, Set Variable and Sort items
  const setVariables = (Variable) => {
    setsort(Variable)
    sortitems()
  }

  // Update Sort Items when toggling between sorted categories
  useEffect(() => {
    sortitems()
  }, [sort])

  return ( 
      <div>
        <button className={`w-32 h-8 m-3 rounded ${sort === "name" ? "bg-sky-500 text-white" : "bg-white text-black"}`} 
        onClick={() => setVariables("name")}> Sort by Name </button>
        <button className={`w-32 h-8 m-3 rounded ${sort === "category" ? "bg-sky-500 text-white" : "bg-white text-black"} `} 
        onClick={() => setVariables("category")}> Sort by Category </button>
        <div> 
          {sorteditems.map((item, index) => (
              <Item
                  key={index}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
              />
          ))}
        </div> 
      </div>
  )
}