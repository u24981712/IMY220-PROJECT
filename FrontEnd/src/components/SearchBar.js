import React from 'react';
import { Link } from 'react-router-dom';
import Button1 from './Button1';

const SearchBar = () => {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/SearchBar.css" />

            <div className="searchBarContainer">

                <input type="text" placeholder="Search..." className="searchInput" />
                <Button1 text={"Search"} style={"button5"} />

            </div>
        </>
    );
}

export default SearchBar;