import "./AddRecipeButton.css";

export default function AddRecipeButton({handleToggle}) {
    return (
        <button className="recipe-add-button" onClick={handleToggle} title="You have to be signed in">
            + Recipe
        </button>
    )
}