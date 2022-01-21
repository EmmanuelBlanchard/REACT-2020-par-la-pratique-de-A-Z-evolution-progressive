import React, {Component} from 'react';
import Bouton from '../../../components/Bouton/Bouton';
import { withFormik } from 'formik';

class FormulaireAjoutLivre extends Component {
    // state = {
    //     titreSaisi : "",
    //     auteurSaisi : "",
    //     nombreDePagesSaisi : ""
    // }

    // handleValidationForm = (event) => {
    //     event.preventDefault();
    //     this.props.validation(this.state.titreSaisi,this.state.auteurSaisi,this.state.nombreDePagesSaisi);
    //     this.setState({
    //         titreSaisi : "",
    //         auteurSaisi : "",
    //         nombreDePagesSaisi : ""
    //     })
    // }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{fontFamily:'Sigmar One'}}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="titre">Titre du livre</label>
                        <input type="text" 
                            className="form-control" 
                            id="titre"
                            name="titre" 
                            value={this.props.values.titre}
                            onChange={this.props.handleChange} 
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.titre && this.props.errors.titre 
                            && <span style={{color:"red"}}>{this.props.errors.titre}</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur">Auteur</label>
                        <input type="text" className="form-control" 
                            id="auteur" 
                            name="auteur" 
                            value={this.props.values.auteur}
                            onChange={this.props.handleChange} 
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.auteur && this.props.errors.auteur && 
                            <span style={{color:"red"}}>{this.props.errors.auteur}</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombreDePages">Nombre de pages</label>
                        <input type="number" className="form-control" 
                            id="nombreDePages" 
                            name="nombreDePages" 
                            value={this.props.values.nombreDePages}
                            onChange={this.props.handleChange} 
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.nombreDePages && this.props.errors.nombreDePages && 
                            <span style={{color:"red"}}>{this.props.errors.nombreDePages}</span>
                        }
                    </div>
                    <Bouton typeBtn="btn-primary" css="mb-3" clic={this.props.handleSubmit}>Valider</Bouton>
                </form>
            </>
        );
    }
}

export default withFormik({
    mapPropsToValues : () => ({
        titre:'',
        auteur:'',
        nombreDePages:'',
    }),
    validate: values => {
        const errors = {};
        if(values.titre.length < 3) {
            errors.titre = "Le titre doit avoir plus de 3 caractères";
        }
        if(values.titre.length > 15) {
            errors.titre = "Le titre doit avoir moins de 15 caractères";
        }
        if(!values.titre) {
            errors.titre = "Le champ Titre du livre est obligatoire";
        }
        if(!values.auteur) {
            errors.auteur = "Le champ Auteur est obligatoire";
        }
        if(!values.nombreDePages) {
            errors.nombreDePages = "Le champ Nombre de pages est obligatoire";
        }
        return errors;
    },
    handleSubmit: (values,{props}) => {
        // Dans le composant withFormik, qui n'est pas de type classe, donc pas this.props
        props.validation(values.titre,values.auteur,values.nombreDePages)
    }
})(FormulaireAjoutLivre);