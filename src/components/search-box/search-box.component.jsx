import React from "react";
import "./search-box.style.css";

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input onChange={handleChange}
               className="search"
               type="search"
               placeholder={placeholder} />
    );
};
