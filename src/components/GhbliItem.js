import React from "react";
import './Ghibli.css'

const FilmsItem = ({film, addToFavorites, addToWatchList}) => {

    const handleWatchClick = () => {
        addToWatchList(film)
    }

    const handleFavouriteClick = () => {
        addToFavorites(film)
    }

    return(<><li>
    <h3>{film.title}</h3><img src={film.movie_banner}/>
    <p>{film.description}</p>
    <button onClick={handleWatchClick}>Add to watchlist</button><button onClick={handleFavouriteClick}>Add to favorites</button>

    </li></>)
}

export default FilmsItem