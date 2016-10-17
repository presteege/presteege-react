import React from 'react';
import MyLink from './MyLink';
//import { IndexLink } from 'react-router';

export default class Nav extends React.Component{

  render(){
      return (
        <ul>
          <li> <MyLink  to="/">Accueil</MyLink> </li>
          <li><MyLink   to="/produits-terrain">Produits pour le terrain</MyLink></li>
          <li><MyLink to="/produits-image">Produits d'image</MyLink></li>
          <li><MyLink   to="/produits-perso">Produits personnalisés et personnalisables</MyLink></li>
          <li><MyLink to="/contact">Contact</MyLink></li>
        </ul>
      );

}
}
