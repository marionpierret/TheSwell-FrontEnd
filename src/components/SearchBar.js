import React, { useContext, useState } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { value7, value8, value9 } = useContext(TheSwellContext);
  const [query, setQuery] = value7;
  const [input, setInput] = value8;
  const [spots, setSpots] = value9

  const handleClick = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  const idSpot = spots.find((element) => element.spot_name == query)
  console.log(idSpot)

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);

  return (
<div>

  
    <form onSubmit={handleClick}>
      <input
        type="text"
        placeholder="Enter a location"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Rechercher</button>
      {decoded && idSpot ? (
        <Link to={`/spot/${idSpot._id}`}>Spot détails</Link>
      ) : (
        <Link to={`/`}></Link>
      )}
    </form>
    </div>
  );
};

export default SearchBar;
