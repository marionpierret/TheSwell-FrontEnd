import React, { useContext } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import "../css/SearchBar.css";

const SearchBar = () => {
  const { value7, value8, value9 } = useContext(TheSwellContext);
  const [query, setQuery] = value7;
  const [input, setInput] = value8;
  const [spots, setSpots] = value9;

  const handleClick = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  const idSpot = spots.find((element) => element.spot_name == query);

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);

  return (
    <div className="searchBarFull">
      <form onSubmit={handleClick} className="search">
        <input
          className="inputSpot"
          type="text"
          placeholder="Enter a location"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="searchBtn">
          <button type="submit">Search</button>
        </div>
        {decoded && idSpot ? (
          <Link to={`/spot/${idSpot._id}`} className="spotDetailsBtn">
            Details
          </Link>
        ) : (
          <Link to={`/`}></Link>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
