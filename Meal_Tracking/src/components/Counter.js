import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {
    const {meals} =useContext(MealsContext)
    const remainingMeals = meals.filter((e)=>!e.ticked).length;

    return (
        <div>
            <h3>Meals Remaining: {remainingMeals}</h3>
        </div>
    )
}

export default Counter;