import React from "react";
import classe from "./jeu.scss"
import Colonnes from "./colonnes/colonnes"

const jeu = (props) => {
    const grille =Object.keys(props.colonnes)
    .map(grilleKey=> {
        return [...Array(props.colonnes[grilleKey])]
            .map((_, i) => {
                return <Colonnes key={grilleKey + i} type={grilleKey}/>
            })
    })
            .reduce((arr,el)=> {
                return arr.concat(el)
            },[])
        return(
            <div className={classe.jeu}>{grille}</div>

    )


}
export default jeu;