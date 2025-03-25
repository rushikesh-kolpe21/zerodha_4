import React, { useState } from "react";

// import {Tooltip, Grow} from "@material-ui/core";
import {watchlist} from '../data/data';

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) =>{
          <WatchListItem stock={stock} key={index}/>
        })}
      </ul>
    </div>
  );
};
 
export default WatchList;

const WatchListItem = ({stock}) =>{
    const [showWatchlistActions, setShowWatchlistActions] = useState(false)
}