import RecipeScroll from "./components/RecipeScroll/RecipeScroll";
import RecipeSearchBar from "./components/RecipeSearchBar/RecipeSearchBar";

import "./App.css"

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <header className="AppHeader">
                    <div className="header-title"><h1>ReCook</h1></div>
                    <RecipeSearchBar/>
                    <div>
                        <button>+ Recipe</button>
                    </div>
                </header>
                {/*<RecipeCreator/>*/}
                <Routes>
                    <Route path="/" element={<RecipeScroll/>} />
                    <Route path="*" element={<h2>404</h2>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
