import RecipeScroll from "./components/RecipeScroll/RecipeScroll";
import "./App.css"
import RecipeCreator from "./components/RecipeCreator/RecipeCreator";

function App() {

    return (
        <div className="App">
            <header className="AppHeader">

            </header>
            {/*<RecipeCreator/>*/}
            <RecipeScroll/>
        </div>
    );
}

export default App;
