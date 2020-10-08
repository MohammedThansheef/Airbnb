import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "../SearchResult/SearchResult";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 october to 30 october · 2 guest</p>
        <h1>Stays nearyby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/53d5c031-1184-4d38-ab9b-b6a94c06b7b7.jpg?im_w=960"
        location="Private room in center of Mangalore"
        title="Exclusive Beach Villa"
        description="This is an Exotic Beach House having fantastic sea views from The Living, Dining & from the Bedrooms."
        rating={4.73}
        price="2,286/ night"
        total="6,796 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ff34926a-564d-44d0-a23a-3c3f78dd601f.jpg?im_w=720"
        location="Near City centre"
        title="Moidoo’s Maison"
        description="Contemporary villa with the best views! breakfast provided on request"
        rating={4.21}
        price="6,399/ night"
        total="18,999 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/921c9dfb-53e0-4615-b2ae-1b1f7078a7ec.jpg?im_w=960"
        location="Adyar Garden"
        title="Beach resort Mangalore"
        description="A tropical hillside retreat resting on Kuttikkanam Hills. A 2 bed room fully furnished villa."
        rating={4.83}
        price="7,200/ night"
        total="22,333 total"
      />
    </div>
  );
}

export default SearchPage;
