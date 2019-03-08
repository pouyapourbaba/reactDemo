import React, { Component } from "react";

const SearchBox = ({value, onChange}) => {
  return ( 
    <input
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        className="form-control my-2"
        type="text"
        placeholder="Search..."
        aria-label="Search"
      />
   );
}
 
export default SearchBox;
