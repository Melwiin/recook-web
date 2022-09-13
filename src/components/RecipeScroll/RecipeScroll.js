import React, {useEffect, useState} from "react";
import axios from "axios";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeScroll.css"

export default function RecipeScroll() {

    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {
        axios.get("http://localhost:8080/api/v1/recipes")
            .then(res => {
                setRecipes(res.data);
                console.log(res.data);
            })
    }

    useEffect(()=> {
        getRecipes();
    }, [])

    return (
        <div className="recipe-scroll-wrapper">
            <h2>Our Recipes:</h2>
            <div className="recipe-scroll">

                {recipes.map((recipe) => {
                  return <RecipeCard
                      key={recipe.id}
                      stars={recipe.stars}
                      imageUri={"http://localhost:8080/api/v1/recipes/image?imageUri=" + recipe.imageUri}
                      recipeTitle={recipe.recipeTitle}
                      recipeDescription={recipe.recipeDescription}
                  />
                })}
            </div>
        </div>
    )
}