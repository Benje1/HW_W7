import React from "react";

const WatchListItem = ({film, index, removeFromWatchList, addToFavorites}) => {

    const handleClick = () => {
        removeFromWatchList(index)
    }

    const handleFavouriteClick = () => {
        addToFavorites(film)
        removeFromWatchList(index)
    }

    return(<>
    <li><p>{film.title}</p><button onClick={handleClick}>I Watched this</button><button onClick={handleFavouriteClick}>I watched it and I loved it!!</button></li>
    </>)

}

export default WatchListItem