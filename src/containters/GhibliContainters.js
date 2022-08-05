import React, {useEffect, useState} from "react";
import GhibliList from "../components/GhibliList";
import Favourites from "../components/favourites";
import WatchList from "../components/watchlist";

const GhibliContainer = () => {

    const [films, setFilms] = useState([])
    const [watchList , setWatchList] = useState([])
    const [favorites, setFavourties] = useState([])
    
    useEffect(() => {
        getFilms();
    }, [])

    const getFilms = function(){fetch("https://ghibliapi.herokuapp.com/films").then(res => res.json()).then(films => setFilms(films))}

    const addToWatchList = (selectedFilm) => {
        if (watchList.includes(selectedFilm)) {
            return
        } else {
            const copyWatchList = [... watchList, selectedFilm]
            setWatchList(copyWatchList)
        }
    }

    const addToFavorites = (selectedFilm) => {
        if (favorites.includes(selectedFilm)) {
            return
        } else {
            const copyFavorites = [... favorites, selectedFilm]
            setFavourties(copyFavorites)
        }
    }

    const removeFromWatchList = (selectedFilm) => {
        // const index = watchList.findIndex(selectedFilm)
        const toRemoveFromList = [...watchList]
        toRemoveFromList.splice(selectedFilm, 1)
        setWatchList(toRemoveFromList)
    }


    return(<>
    <h1>Studio Ghibli FIlms, read the descriotion and add to your favorites or watchList! See your list at the end!</h1>
    <GhibliList films={films} addToFavorites={addToFavorites} addToWatchList={addToWatchList}/>
    {favorites ?<Favourites favorites={favorites}/> : null}
    {watchList ?<WatchList watchList={watchList} removeFromWatchList={removeFromWatchList}/> : null}
    </>)

}

export default GhibliContainer;