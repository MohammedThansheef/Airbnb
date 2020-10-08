import React, { useState } from "react";
import "./Search.css";
//main style file
import "react-date-range/dist/styles.css";
// theme css file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/search");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSet(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSet} />
      <h2>
        Number of guest
        <PeopleIcon />
      </h2>
      <input className="input" min={0} defaultValue={2} type="number" />

      <button className="button" onClick={handleClick}>
        Search Airbnb
      </button>
    </div>
  );
}

export default Search;
