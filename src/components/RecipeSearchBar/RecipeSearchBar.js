import "./RecipeSearchBar.css"
import SearchIcon from "../../assets/search_icon.svg";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function RecipeSearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [searchNavIndex, setSearchNavIndex] = useState(-1);

    const fetchSuggestions = (query) => {
        axios.get(process.env.REACT_APP_API_DOMAIN + "/suggestions?q=" + query)
            .then(res => {
                setSuggestions(res.data);
            })
    }

    const navigate = useNavigate();
    const redirectToRecipe = (id) => {
        setSearchValue("");
        navigate('/recipe', {state: {id: id}});
        window.location.reload();
    }

    return(
        <div className="search-bar">
            <img src={SearchIcon} alt="search icon"/>
            <input type="text" placeholder="Search your favorite recipe" value={searchValue} onChange={event => {
                setSearchValue(event.target.value);
                fetchSuggestions(event.target.value);
            }}
                   onKeyDownCapture={(e)=>{
                       if(e.key === "ArrowDown") {
                           setSearchNavIndex(prevState => prevState < -1 ? prevState = suggestions.length - 1 : prevState >= suggestions.length - 1 ? -1 : prevState+1);
                       }else if(e.key === "ArrowUp") {
                           setSearchNavIndex(prevState => prevState <= -1 ? prevState = suggestions.length - 1 : prevState >= suggestions.length ? -1 : prevState-1);
                       }else if(e.key === "Escape") {
                           setSearchValue("");
                           setSearchNavIndex(-1);
                       }else if(e.key === "Enter") {
                           if(searchNavIndex !== -1) redirectToRecipe(suggestions[searchNavIndex].id);
                       }else {
                           setSearchNavIndex(-1);
                       }
                   }}
            />
            {searchValue.length ? (<div className="search-suggestion-box">
                <ul className="search-suggestion-list">
                    {!suggestions.length ? <h4>No recipe found :(</h4> :
                            suggestions.map((s, index) => {
                                return <li className={index === searchNavIndex ? "selected" : ""} key={s.id} onClick={()=>redirectToRecipe(s.id)}>{s.recipeTitle}</li>
                            })
                    }
                </ul>
            </div>) : null}
        </div>
    );
}