import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Search from "../Search/Search";
import "./Banner.css";
import { useHistory } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/search");
  };

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={(e) => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h1> Give your routine a new home</h1>
        <h5>
          Settle in somewhere new. Discover nearby stays to live, work, or just
          relax.
        </h5>
        <Button variant="outlined" onClick={handleClick}>
          Explore nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
