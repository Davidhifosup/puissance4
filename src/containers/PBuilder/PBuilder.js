import React , {Component} from "react";
import Auxi from "../../HOC/Auxi";
import Jeu from "../../composants/jeu/jeu";

class PBuilder extends Component {
    state= {
        colonnes: {
            colonnes: 7
        }

    }

    test = () => {
        this.props.history.push('/jeu')
    }

    render (){
        return (
            <Auxi>
                <Jeu colonnes={this.state.colonnes}  />
                <div>Contrôleur Puissance 4</div>

            </Auxi>

        )
    }

}

export default PBuilder;