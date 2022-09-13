import React from "react";
import './RecipeCard.css'
import StarRating from "../StarRating/StarRating";

export default function RecipeCard(props) {
    return (
        <div className="recipe-card-wrapper">
            <div className="preview-img" style={{backgroundImage: `url(${props.imageUri})`}}></div>
            <span className="recipe-title">{props.recipeTitle}</span>
            <span className="recipe-description">{props.recipeDescription}</span>
            <StarRating value={props.stars}/>
        </div>
    );
}