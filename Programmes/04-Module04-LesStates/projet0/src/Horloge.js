import React, {Component} from "react";

class Horloge extends Component {
    state = {
        date: new Date(),
    }

    componentDidMount() {
        // Fonction setInterval, pour lancer notre timer
        // Utiliser une fonction de rappel qui sera lancée de manière asynchrone
        // Stocker le timer pour pouvoir l'arrêter => this.timerID
        this.timerID = setInterval(() => this.setState({date:new Date()}), 1000);
    }

    // Fonction qui se lance au momnent du démontage d'un composant
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(){
        return <h2>Horloge : {this.state.date.toLocaleTimeString()}</h2>
    }
}

export default Horloge;