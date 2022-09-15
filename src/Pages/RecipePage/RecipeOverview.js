import StarRating from "../../components/StarRating/StarRating";

export default function RecipeOverview({recipeData}) {
    return (
        <div className="recipe-overview">
            <div className="left-panel">
                <h1 className="recipe-overview-title">{recipeData.recipeTitle}</h1>
                <h4 className="recipe-overview-creator">~ {recipeData.recipeCreator}</h4>
                <StarRating value={recipeData.stars}/>
                <h2 className="recipe-overview-description-title">Description</h2>
                <span className="recipe-overview-description">{recipeData.recipeDescription}</span>
            </div>
            <div className="recipe-image" style={{backgroundImage: `url(${process.env.REACT_APP_API_DOMAIN + "/image?imageUri=" + recipeData.imageUri}`}}/>
        </div>
    )
}