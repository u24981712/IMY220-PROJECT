import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button1 from "./Button1";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <link rel="stylesheet" type="text/css" href="/assets/css/SearchBar.css" />

      <div className="searchBarContainer">
        <input
          type="text"
          placeholder="Search..."
          className="searchInput"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button1 text={"Search"} style={"button5"} toggle={handleSearch} />
      </div>
    </>
  );
};

export default SearchBar;
