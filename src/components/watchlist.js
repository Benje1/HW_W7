import React from "react";
import WatchListItem from "./watchlistItem";

const WatchList = ({watchList, removeFromWatchList}) => {


    const watchlistItems = watchList.map((film, index) => {
        return <WatchListItem film={film} key={index} removeFromWatchList={removeFromWatchList}/>
    })

    return(<>
    <h3>Your Watchlist is:</h3>
    <ul>{watchlistItems}</ul>
    </>)

}

export default WatchList;