import RecipeScroll from "./components/RecipeScroll/RecipeScroll";
import "./App.css"
import RecipeSearchBar from "./components/RecipeSearchBar/RecipeSearchBar";

function App() {

    return (
        <div className="App">
            <header className="AppHeader">
                <div className="header-title"><h1>ReCook</h1></div>
                <RecipeSearchBar/>
                <div>
                    <button>+ Recipe</button>
                </div>
            </header>
            {/*<RecipeCreator/>*/}
            <RecipeScroll/>
        </div>
    );
}

export default App;
