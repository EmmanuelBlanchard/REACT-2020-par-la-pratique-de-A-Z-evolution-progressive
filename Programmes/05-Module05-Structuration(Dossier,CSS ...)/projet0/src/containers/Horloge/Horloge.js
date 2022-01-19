import React, {Component} from "react";

class Horloge extends Component {
    state = {
        date: new Date(),
        compteur: 1
    }

    tick = () => {
        // this.setState({
        //     date: new Date(),
        //     compteur: this.state.compteur + 1
        // });
        // Fonction réalisée de manière asynchrone, on pourra avoir une certaine incohérence
        // Dès lors que l'on voudra modifier une valeur dans le state en fonction d'une 
        // précèdente valeur du state (pas certain que cela se fasse dans le bon ordre) =>
        // Passer par une fonction qui va modifier le state
        this.setState((oldState,props) => {
            return {
                date: new Date(),
                compteur: oldState.compteur + 1 // Dépend de l'ancienne valeur
            }
        });
    }

    tick2 = () => {
        this.setState({
            date: new Date() // Ne dépend pas de l'ancienne valeur
        });
    }

    componentDidMount() {
        // Fonction setInterval, pour lancer notre timer
        // Utiliser une fonction de rappel qui sera lancée de manière asynchrone
        // Stocker le timer pour pouvoir l'arrêter => this.timerID
        // this.timerID = setInterval(() => this.setState({date:new Date()}), 1000);
        this.timerID = setInterval(
            () => this.tick()
            , 1000
        );
    }

    // Fonction qui se lance au moment du démontage d'un composant
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(){
        return (
            <>
                <h2>Horloge : {this.state.date.toLocaleTimeString()}</h2>
                <div>Compteur : {this.state.compteur}</div>
            </>
        );
    }
}

export default Horloge;