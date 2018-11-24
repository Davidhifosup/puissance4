import React from "react"


const comfirmConnection = (props) => {
return(
   // <h1>Bienvenu sur le jeu du morpion</h1>

    //<h2>Entrez les noms des joueurs</h2>

    <form >
        <label>Joueur 1 :</label> <input type="text" name="nomJoueur1"/><br/><br/>
        <label>Joueur 2 :</label> <input type="text" name="nomJoueur2"/>
        <button type="submit"  name="test" click={props.test}> Jouer !</button>
    </form>

)
};



export default comfirmConnection

