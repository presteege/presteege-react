import React from 'react';
import { IndexLink } from 'react-router';

export default () => (
  <ul>
    <li><IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/">Accueil</IndexLink></li>
    <li><IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/produits-terrain">Produits pour le terrain</IndexLink></li>
    <li><IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/produits-image">Produits d'image</IndexLink></li>
    <li><IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/produits-perso">Produits personnalisés et personnalisables</IndexLink></li>
    <li><IndexLink activeStyle={{ color: 'cornflowerblue' }} to="/contact">Contact</IndexLink></li>
  </ul>
);
