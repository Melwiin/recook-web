import RecipeScroll from "./components/RecipeScroll/RecipeScroll";
import RecipeSearchBar from "./components/RecipeSearchBar/RecipeSearchBar";
import RecipeModal from "./components/Modals/RecipeModal";
import AddRecipeButton from "./components/AddRecipeButton/AddRecipeButton";

import "./App.css"

import React, {useCallback, useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Logo from './assets/logo2.png';
import RecipePage from "./Pages/RecipePage/RecipePage";


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = useCallback(()=> setIsOpen(prevState => !prevState), []);

    return (
        <Router>
            <div className="App">
                <header className="AppHeader">
                    <Link   className="header-title"
                            to={{ pathname: "/" }}>
                        <h1>ReCook</h1>
                        <img src={Logo} alt="ReCook Logo"/>
                    </Link>
                    <RecipeSearchBar/>
                    <div>
                       <AddRecipeButton handleToggle={handleToggle}/>
                    </div>
                </header>
                {/*<RecipeCreator/>*/}
                <Routes>
                    <Route path="/" element={
                        <>
                            <RecipeScroll/>
                            {isOpen ? <RecipeModal isOpen={isOpen} handleToggle={handleToggle}/> : null}
                        </>
                    } />
                    <Route path="/recipe" element={<RecipePage/>}/>
                    <Route path="*" element={<h2>404</h2>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
