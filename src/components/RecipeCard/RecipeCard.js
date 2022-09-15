import React from "react";
import './RecipeCard.css'
import StarRating from "../StarRating/StarRating";
import {useNavigate} from "react-router-dom";

export default function RecipeCard(props) {

    const navigate = useNavigate();
    const redirectToRecipe = () => {
        navigate('/recipe', {state: {id: props.recipeId}});
    }

    return (
        <div className="recipe-card-wrapper" onClick={()=> redirectToRecipe()}>
            <div className="preview-img" style={{backgroundImage: `url(${props.imageUri})`}}></div>
            <span className="recipe-title">{props.recipeTitle}</span>
            <span className="recipe-description">{props.recipeDescription}</span>
            <StarRating value={props.stars}/>
        </div>
    );
}