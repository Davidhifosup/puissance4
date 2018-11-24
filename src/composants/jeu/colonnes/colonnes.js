import React from "react";
import classes from "./colonnes.scss"
import Case from "../case/case"

const colonnes = (props) => {
    return(
        <div className={classes.colonnes}>
            <button>Jouer Ici</button>
            <Case type="case"/>
            <Case type="case"/>
            <Case type="case"/>
            <Case type="case"/>
            <Case type="case"/>
            <Case type="case"/>
        </div>
    )
}

export default colonnes;