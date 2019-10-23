import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local


// composant
const NavigationFamily = () => {

  return (
    <>
      <ul className="list-nav">
        <li> <NavLink to="/contact" exact>S'inscrire</NavLink> </li>
        <li> <NavLink to="/contact" exact>Se connecter</NavLink> </li>
        <li> <NavLink to="/contact" exact>Ajouter une ville</NavLink> </li>
        <li> <NavLink to="/contact" exact>Ajouter un lieu</NavLink> </li>
      </ul>
    </>
  )
}

NavigationFamily.propTypes = {
  
};

// == Export
export default NavigationFamily;
