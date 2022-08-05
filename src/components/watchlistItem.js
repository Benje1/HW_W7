import React from "react";

const WatchListItem = ({film, index, removeFromWatchList}) => {

    const handleClick = () => {
        removeFromWatchList(index)
    }

    return(<>
    <li><p>{film.title}</p><button onClick={handleClick}>I Watched this</button></li>
    </>)

}

export default WatchListItem