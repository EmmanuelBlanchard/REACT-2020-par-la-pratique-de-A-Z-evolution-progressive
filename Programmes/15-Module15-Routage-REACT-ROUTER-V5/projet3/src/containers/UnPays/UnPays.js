import React, {Component} from 'react';
import axios from 'axios';
import TitreH1 from '../../components/Titres/TitreH1';
import Pays from '../PaysManager/Pays/Pays';

class UnPays extends Component {
    state = {
        data: null,
        loading: false,
    }

    componentDidMount = () => {
        this.setState({loading:true});
        // https://restcountries.eu/rest/v2/name/${this.props.nomPays}?fullText=true
        // https://restcountries.com/v2/name/{name}?fullText=true
        axios.get(`https://restcountries.com/v2/name/${this.props.nomPays}?fullText=true`)
            .then(reponse => {
                this.setState({
                    data: reponse.data[0],
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
            })
    }

    render() {
        return (
            <div className="container">
                <TitreH1>Page du pays : {this.props.nomPays}</TitreH1>
                {
                    this.state.data &&
                    <Pays 
                        drapeau={this.state.data.flag}
                        nom={this.state.data.name}
                        capitale={this.state.data.capital}
                        region={this.state.data.region}
                        nomFrancais={this.state.data.translations.fr}
                        {...this.props}
                        solo={true}
                        monnaie={this.state.data.currencies[0].name}
                        monnaieSymbol={this.state.data.currencies[0].symbol}
                    />
                }
            </div>
        );
    }
}

export default UnPays;
