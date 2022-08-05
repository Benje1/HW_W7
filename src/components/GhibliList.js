import React from "react";
import FilmsItem from "./GhbliItem";

const GhibliList = ({films, addToFavorites, addToWatchList}) => {

    const filmItems = films.map((film, index) => {
        return <FilmsItem film={film} key={index} addToFavorites={addToFavorites} addToWatchList={addToWatchList}/>
    })

    return(<><ul>
    {filmItems}
    </ul></>)

}

export default GhibliList