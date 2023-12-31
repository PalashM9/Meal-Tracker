import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const MealsList = () => {
    const {meals,tickMeal}=useContext(MealsContext)

    return (
        <div>
            <h2>Meals:</h2>
            <ul>
                {meals.map((e)=>(
                    <li key={e.id}>
                        <input 
                            type="checkbox"
                            checked={e.ticked||false}
                            onChange={()=>{tickMeal(e.id)}}
                        />
                        {e.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MealsList;