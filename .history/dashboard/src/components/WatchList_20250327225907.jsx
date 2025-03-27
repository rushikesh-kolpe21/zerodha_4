import React, { useState } from "react";

import {Tooltip, Grow} from "@mui/material";
import {watchlist} from '../data/data';

import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';
import { DoughnutChart } from "./DoughnoutChart";


 const labels = watchlist.map((subArray)=> subArray["name"]);
    
const WatchList = () => {
  const data = {
      labels,
      datasets: [
          {
            label: 'Price',
            data: watchlist.map((stock)=>stock.price),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
  }



  // export const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
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
          return(
            <WatchListItem stock={stock} key={index}/>
          )
           })}
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
};
 
export default WatchList;

// watchlistitem

const WatchListItem = ({stock}) =>{
    const [showWatchlistActions, setShowWatchlistActions] = useState(false)

    const handleMouseEnter=(event)=>{
        setShowWatchlistActions(true)
    }

    const handleMouseExit=(event)=>{
      setShowWatchlistActions(false)
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
           {stock.isDown ? (
            <KeyboardArrowDown className="down"/>
           ) : (<KeyboardArrowUp className="up"/> 
           )}
           <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uuid={stock.name} />}
    </li>
  );
  };

// watch list action (when hover)

const WatchListActions = ({uuid}) =>{
  return(
    <span className="actions">
          <Tooltip 
            title="Buy (B)"
            placement="top"
            arrow 
            TransitionComponent={Grow}
            >
            <button className="buy">Buy</button>
          </Tooltip>
          <Tooltip 
            title="Sell (S)"
            placement="top"
            arrow 
            TransitionComponent={Grow}
            >
            <button className="sell">Sell</button>
          </Tooltip>
          <Tooltip 
            title="Analytic (A)"
            placement="top"
            arrow 
            TransitionComponent={Grow}
            >
           <button className="action"> <BarChartOutlined className="icon" /></button>
          </Tooltip>
          <Tooltip 
            title="More (M)"
            placement="top"
            arrow 
            TransitionComponent={Grow}
            >
             <button className="action"> <MoreHoriz className="icon" /></button>
          
          </Tooltip>
    </span>
  )
}