"use client"

// Imports
import React, { useState } from 'react';

export default function NewItem() {

    // State Variable
    const [quantity, setQuantity] = useState(1)

    // Increment, if < 20 then add one each click
    function Increment() {
        if (quantity < 20) {
            setQuantity(quantity + 1)
        }
    }
    
    // Decrement, if not == 1 then subtract one each click
    function Decrement() {
        if (quantity != 1) {
            setQuantity(quantity - 1)
        }
    }

    // return
    return(
        <div className="p-20" >
        <h1 className="text-5xl pb-3" > {quantity} </h1>
        <div className="space-x-6 text-lg" >
            <button className="bg-white border-2 rounded border-white text-black w-28" onClick={() => Increment() } > Add </button>
            <button className="border-2 rounded border-white w-28"  onClick={() => Decrement() } > Subtract </button>
        </div>
        </div>
    )
}
