import React, {useContext, useState} from "react"
import { TheSwellContext } from "../context/TheSwellContext"
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

const SearchBar = () => {
const {value7, value8} = useContext(TheSwellContext)
const [query, setQuery] = value7
const [input, setInput] = value8


const handleClick = (e) => {
    e.preventDefault()
    console.log(input)
    setQuery(input)
}

const token = localStorage.usertoken;
const decoded = jwt_decode(token);

return(
<form onSubmit={handleClick}>
    <input type='text' placeholder='Enter a location' value={input} onChange={(e)=> setInput(e.target.value)} />
    <button type='submit'>Rechercher</button>
    {decoded && (
    <Link to={`/member/${decoded.user._id}`}>Spot détails</Link>
    )}
</form>
)

}

export default SearchBar;