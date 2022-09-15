import "./RecipeModal.css"
import RecipeCreator from "../RecipeCreator/RecipeCreator";
import {useEffect} from "react";

export default function RecipeModal({handleToggle}) {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
        return ()=> document.body.style.overflow = 'unset';
    }, []);

    return (
        <div className="recipe-modal-backdrop">
            <div className="recipe-modal">
                <div className="recipe-modal-header">
                    <button onClick={handleToggle}>Cancel</button>
                    <h3>Recipe Creator</h3>
                    <button disabled={true}>Done</button>
                </div>
                <RecipeCreator/>
            </div>
        </div>
    )
}