"use client"

// Imports
import React, { useState } from 'react';

export default function NewItem({ Name, Category }) {

    // State Variable
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("produce")

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

    // Handle Submission ~~ Reset everything to default
    function handleSubmit() {
        alert(`Added Item - ${name}, Category - ${category}, Quantity - ${quantity}`)
        setName("")
        setCategory("produce")
        setQuantity(1)
    }

    // return
    return(
        <div className="p-20" >
        <input className='text-black h-10 w-96 rounded p-2 mb-4 ' name="Name" value={name} placeholder='Item Name' onChange={(event) => setName(event.target.value) } />
        <div className='flex' >
            <div className="space-x-6 flex" >
                <h1 className="text-xl" > {quantity} </h1>
                <button className="bg-white border-2 rounded border-white text-black w-10" onClick={() => Increment() } > + </button>
                <button className="border-2 rounded border-white w-10" onClick={() => Decrement() } > - </button>
            </div>
            <select value={category} className='text-black ml-5 w-56' onChange={(event) => setCategory(event.target.value) } >  
                <option value="produce"> Produce </option>
                <option value="dairy"> Dairy </option>
                <option value="bakery"> Bakery </option>
            </select>
        </div>
        <button className='bg-sky-500 w-96 h-8 mt-4 rounded font-medium ' onClick={() => handleSubmit() } > Submit </button>
        </div>
    )
}
