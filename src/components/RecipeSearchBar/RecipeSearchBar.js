import "./RecipeSearchBar.css"
import SearchIcon from "../../assets/search_icon.svg";

export default function RecipeSearchBar(args) {

    const suggestions = [
        "Thai Curry",
        "Pizza Teig",
        "Chilli con Carne",
        "Rotes Curry",
        "Desert",
        "Bananen sorbe",
        "Chilli sin Carne",
    ]

    return(
        <div className="search-bar">
            <img src={SearchIcon} alt="search icon"/>
            <input type="text" placeholder="Search your favorite recipe"/>
            <div className="search-suggestion-box">
                <ul className="search-suggestion-list">
                    {!suggestions.length ? <h3>Loading...</h3> :
                        suggestions.map(s => {
                      return <li>{s}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}