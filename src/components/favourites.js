import React from "react";

const Favourites = ({favorites}) => {

    const unpacked = favorites.map((favorite, index) => {
        return <li key={index}>{favorite.title}</li>
    })

    return (<>
    <h3>Your favorite films are:</h3>
    <ul>{unpacked}</ul>
    </>)
}

export default Favourites;