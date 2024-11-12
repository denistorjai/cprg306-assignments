"use client"
// Import Components
import { useState, useEffect } from "react"

// Export Page
export default function MealIdea({ ingredient }) {

    // Meal setMeals state
    const [meals, setMeals] = useState([])

    // Get Data
    useEffect(() => {
        if (ingredient) {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                .then(response => response.json())
                .then(data => {console.log(data); setMeals(data.meals || []) })
                .catch(error => console.error(error))
        }
    }, [ingredient])

    return (
        <div className="p-3">
            {meals.length > 0 ? ( meals.map((meal, index) => (
                    <div className="bg-sky-500 p-3 my-3 rounded text-pretty" key={index}>
                        <h2>{meal.strMeal}</h2>
                    </div>
                ))
            ) : (
                <p> No meals found </p>
            )}
        </div>
    )
}
