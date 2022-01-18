import React, {Component} from "react";

class Horloge extends Component {
    state = {
        date: new Date(),
    }

    render(){
        return <h2>Horloge : {this.state.date.toLocaleTimeString()}</h2>
    }
}

export default Horloge;