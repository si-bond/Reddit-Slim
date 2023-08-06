import React, {useState} from "react"
import { Link } from "react-router-dom";
import "./Header.css"
import Logo from "../../logo/reddit-logo.jpg"

export default function Header({handleSearch}){

    const [searchText, setSearchText] = useState("")

    function handleChange(event){
        const searchBarText = event.target.value;
        setSearchText(searchBarText)
    }

    function handleClick(){
        handleSearch(searchText)
        setSearchText("")
    }

    return (
        <div className="header">
            <div className="header-logo">
            <Link to="/"><img src={Logo} width="100px" /></Link>
            </div>
            <div className="search-bar">
                <input 
                    type="text" 
                    id="search"
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchText}
                />
                <button onClick={handleClick}>🔎</button>
            </div>
            <div></div>
        </div>
    )
}