import React, {useContext, useState} from "react"
import { TheSwellContext } from "../context/TheSwellContext"

const SearchBar = () => {
const {value7, value8} = useContext(TheSwellContext)
const [query, setQuery] = value7
const [input, setInput] = value8


const handleClick = (e) => {
    e.preventDefault()
    console.log(input)
    setQuery(input)
}

return(
<form onSubmit={handleClick}>
    <input type='text' placeholder='Enter a location' value={input} onChange={(e)=> setInput(e.target.value)} />
    <button type='submit'>Rechercher</button>
</form>
)

}

export default SearchBar;