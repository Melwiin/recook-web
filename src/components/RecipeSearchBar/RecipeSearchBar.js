import "./RecipeSearchBar.css"
import SearchIcon from "../../assets/search_icon.svg";
import {useState} from "react";
import axios from "axios";

export default function RecipeSearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = (query) => {
        axios.get(process.env.REACT_APP_API_DOMAIN + "/suggestions?q=" + query)
            .then(res => {
                setSuggestions(res.data);
            })
    }

    return(
        <div className="search-bar">
            <img src={SearchIcon} alt="search icon"/>
            <input type="text" placeholder="Search your favorite recipe" value={searchValue} onChange={event => {
                setSearchValue(event.target.value);
                fetchSuggestions(event.target.value);
            }}/>
            {searchValue.length ? (<div className="search-suggestion-box">
                <ul className="search-suggestion-list">
                    {!suggestions.length ? <h4>No recipe found :(</h4> :
                        suggestions.filter((str) => {
                            return str.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
                        })
                            .map(s => {
                                return <li key={s}>{s}</li>
                            })
                    }
                </ul>
            </div>) : null}
        </div>
    );
}