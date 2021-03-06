import React from 'react';
import {NavLink} from 'react-router-dom';

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" 
                                exact 
                                className="nav-link rounded"
                                activeClassName="active activeAccueil"
                                activeStyle={{
                                    textDecoration:"underline"
                                }}
                                >Page d'accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pays" 
                                exact
                                className="nav-link rounded"
                                activeClassName="active activePays"
                                >Les pays</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
);

export default navbar;
