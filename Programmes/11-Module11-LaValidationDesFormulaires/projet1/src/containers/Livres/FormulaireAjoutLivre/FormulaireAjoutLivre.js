import React, {Component} from 'react';
import Bouton from '../../../components/Bouton/Bouton';
import { withFormik } from 'formik';
import * as Yup from 'yup';

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
                            onChange={(event) => this.props.setFieldValue('nombreDePages', +event.target.value)} 
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
    validationSchema : Yup.object().shape({
        titre : Yup.string()
                    .min(3,'Le titre doit avoir plus de 3 caractères')
                    .max(15,'Le titre doit avoir moins de 15 caractères')
                    .required("Le titre est obligatoire"),
        auteur: Yup.string()
                    .min(3,"L'auteur doit avoir plus de 3 caractères")
                    .required("L'auteur est obligatoire"),
        nombreDePages: Yup.number()
                    .lessThan(1000,'Le nombre de pages doit etre inférieur à 1000 !')
                    .moreThan(50,'Le nombre de pages doit etre supérieur à 50 !')
    }),
    handleSubmit: (values,{props}) => {
        // Dans le composant withFormik, qui n'est pas de type classe, donc pas this.props
        props.validation(values.titre,values.auteur,values.nombreDePages)
    }
})(FormulaireAjoutLivre);