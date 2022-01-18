import React, {Component} from "react";

class Horloge extends Component {
    state = {
        date: new Date(),
    }

    componentDidMount() {
        console.log("composant monté");
    }

    render(){
        return <h2>Horloge : {this.state.date.toLocaleTimeString()}</h2>
    }
}

export default Horloge;