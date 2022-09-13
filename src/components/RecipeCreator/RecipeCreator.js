import {useState} from "react";
import axios from "axios";

export default function RecipeCreator(){

    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [recipeCreator, setRecipeCreator] = useState("");

    const [recipeImage, setRecipeImage] = useState(null);

    const [ingredientAmount, setIngredientAmount] = useState(0);
    const [ingredientUnit, setIngredientUnit] = useState("")
    const [newIngredient, setNewIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const [newDirection, setNewDirection] = useState("");
    const [directions, setDirections] = useState([]);

    const UNITS = ["ML", "L", "TSP", "TBSP", "CUP", "GALLON", "MG", "G", "KG", "LB", "OZ", "NONE"];



    const sendRecipe = () => {
        const recipe = {
            recipeTitle: recipeTitle,
            recipeDescription: recipeDescription,
            recipeCreator: recipeCreator,
            recipeServings: 2,
            ingredients: ingredients,
            directions: directions,
            tags: [],
            calories: 0,
            stars: 0
        }

        const data = new FormData();
        data.append('file', recipeImage, recipeImage.name);

        axios.post( 'http://localhost:8080/api/v1/recipes/saveimg', data)
            .catch((e) => console.log(e))
            .then((res) => {
                recipe.imageUri = res.data;
                axios.post('http://localhost:8080/api/v1/recipes/add', recipe)
                    .catch((e) => console.log(e))
                    .then(res => {
                        console.log(res.data);
                    })
            });
    }

    return(
        <div className="recipe-creator">
            <input type="text" placeholder="Recipe title" value={recipeTitle} onChange={e => setRecipeTitle(e.target.value)}/>
            <input type="text" placeholder="Creator" value={recipeCreator} onChange={e => setRecipeCreator(e.target.value)}/>
            <input type="text" placeholder="Description" value={recipeDescription} onChange={e => setRecipeDescription(e.target.value)}/>
            <input type="file" name="image" accept="image/png, image/jpeg" onChange={e => {
                setRecipeImage(e.target.files[0]);
            }}/>

            <div>
                <input type="number" min={0.00} step={0.25} value={ingredientAmount} onChange={e => setIngredientAmount(parseFloat(e.target.value))}/>
                <select value={ingredientUnit} onChange={e => setIngredientUnit(e.target.value)}>
                    <option value="" disabled>Unit</option>
                    {UNITS.map(unit => {
                        return <option key={unit} value={unit}>{unit}</option>
                    })}
                </select>
                <input type="text" placeholder="Ingredient" value={newIngredient} onChange={e => setNewIngredient(e.target.value)}/>
                <button disabled={!newIngredient.length} onClick={() => {
                    const ingredient = {
                        "ingredientName": newIngredient,
                        "unit": ingredientUnit,
                        "amount": ingredientAmount
                    }
                    setIngredients(prevState => ([...prevState, ingredient]));
                    setNewIngredient("");
                    setIngredientUnit("");
                    setIngredientAmount(0);
                }}>Add</button>
                <div className="ingredient-list">
                    <ul>
                        {ingredients.map(ingredient => {
                            return <li key={ingredient.ingredientName}>{ingredient.amount}{ingredient.unit} {ingredient.ingredientName}</li>
                        })}
                    </ul>
                </div>
            </div>

            <div>
                <input type="text" placeholder="Direction" value={newDirection} onChange={e => setNewDirection(e.target.value)}/>
                <button disabled={!newDirection.length} onClick={e => {
                    setDirections(prevState => ([...prevState, newDirection]));
                    setNewDirection("");
                }}>Add</button>
                <div className="direction-list">
                    <ul style={{listStyle: "none"}}>
                        {directions.map((direction, index) => {
                            return <li key={direction}>{index + 1}. Step: {direction}</li>
                        })}
                    </ul>
                </div>
            </div>

            <button onClick={sendRecipe}>Send</button>
        </div>
    );
}