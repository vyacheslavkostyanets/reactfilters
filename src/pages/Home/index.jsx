import React from "react";
import SearchBar from "../../features/SearchBar";
import FilterPanel from "../../features/FilterPanel";
import List from "../../features/List";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel />
        </div>
        <div className="home_list-wrap">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
