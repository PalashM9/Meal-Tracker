import React, { useState } from "react";
import {createContext} from 'react';
export const MealsContext = createContext()

const todaysMeals = [
    { id: 1, name: 'Baked Beans',ticked:false },
    { id: 2, name: 'Baked Sweet Potatoes',ticked:false },
    { id: 3, name: 'Baked Potatoes',ticked:false},
]

const MealsProvider = (props) => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal =(id) => {
        setMeals(
            meals.map((e)=>(
                e.id==id ? {...e, ticked:!e.ticked} : e
            ))
    
        )

    }

    return (
        
        <MealsContext.Provider value={{meals,tickMeal}}>{props.children}</MealsContext.Provider>
            
        
    )
};

export default MealsProvider;