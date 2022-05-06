import { Search } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBar-wrap">
      <Search className="searchBar-icon" />
      <input
        type="text"
        placeholder="Woodland Hils"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
