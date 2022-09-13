import RecipeScroll from "./components/RecipeScroll/RecipeScroll";
import "./App.css"
import RecipeCreator from "./components/RecipeCreator/RecipeCreator";
import RecipeSearchBar from "./components/RecipeSearchBar/RecipeSearchBar";

function App() {

    return (
        <div className="App">
            <header className="AppHeader">
                <h1>ReCook</h1>
                <RecipeSearchBar/>
            </header>
            {/*<RecipeCreator/>*/}
            <RecipeScroll/>
        </div>
    );
}

export default App;
