import React from 'react';
import { IndexLink } from 'react-router';

class Nav extends React.Component{

  render(){

    return (
      <nav>
        <IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/">Accueil</IndexLink>
        <IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/produits-terrain">Produits pour le terrain</IndexLink>
        <IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/produits-image">Produits d'image</IndexLink>
        <IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/produits-perso">Produits personnalisés et personnalisables</IndexLink>
        <IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/contact">Contact</IndexLink>
      </nav>
    );
  }
}

export default Nav;
