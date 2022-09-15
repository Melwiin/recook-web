import "./RecipeCreator.css"

export default function RecipeCreator(){

/*    const sendRecipe = () => {
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
    }*/

    return(
        <div className="recipe-creator">
            <input type="text" placeholder="RECIPE TITLE"/>
            <textarea placeholder="RECIPE DESCRIPTION"/>
            <input type="text" placeholder="RECIPE CREATOR"/>
        </div>
    );
}