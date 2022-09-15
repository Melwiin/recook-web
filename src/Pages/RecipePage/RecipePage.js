import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import RecipeOverview from "./RecipeOverview";

import "./RecipePage.css"
import "./UnitSwitcher.css"

export default function RecipePage() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [recipeData, setRecipeData] = useState({});
    const [selectedMetric, setSelectedMetric] = useState(true);

    const {state} = useLocation();
    const {id} = state;

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_DOMAIN + "/id?q=" + id)
            .then((res)=>{
                setRecipeData(res.data);
                setIsLoaded(true);
            })
    }, [])

    return (
        <>
            {!isLoaded ? null :
                <div className="recipe-page">
                    <div className="recipe-wrapper">
                        <RecipeOverview recipeData={recipeData}/>
                        <div className="ingredient-overview">
                            <div className="ingredient-overview-header">
                                <h2 className="recipe-ingredient-title">Ingredients</h2>
                                <div className="right-side">
                                    <div className="unit-switcher">
                                        <span className={selectedMetric ? "active" : ""}
                                              onClick={() => setSelectedMetric(true)}>METRIC</span>
                                        <span>|</span>
                                        <span className={!selectedMetric ? "active" : ""}
                                              onClick={() => setSelectedMetric(false)}>US</span>
                                    </div>
                                    <span>{recipeData.recipeServings} Serving{recipeData.recipeServings > 1 ? "s" : ""}</span>
                                </div>
                            </div>
                            <div className="ingredient-overview-list">
                                {recipeData.ingredients.map(({ingredientName, unit, amount}) => {
                                    return <span key={ingredientName}>{amount} {unit} <strong>{ingredientName}</strong></span>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}