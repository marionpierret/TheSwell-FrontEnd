import React, { useContext } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import "../css/SearchBar.css";

const SearchBar = () => {
  // Get data from our context
  const { value7, value8, value9 } = useContext(TheSwellContext);
  const [query, setQuery] = value7;
  const [input, setInput] = value8;
  const [spots, setSpots] = value9;

  // Set a new querry and replace the one initialize in our context
  const handleClick = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  // Match the query with one of the existing spot in our database
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
        {/* if the user is login and the spot exist in our database, then details link is displayed */}
        {decoded && idSpot ? (
          <Link to={`/spot/${idSpot._id}`} className="spotDetailsBtn">
            Details
          </Link>
        ) : !decoded && idSpot ? (
          <Link
            to={`/login`}
            className="spotDetailsBtn"
            style={{ color: "red" }}
          >
            Please login to see spot details
          </Link>
        ) : decoded && !idSpot ? (
          <Link to={`/`} className="spotDetailsBtn" style={{ color: "red" }}>
            Unknown spot
          </Link>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default SearchBar;
