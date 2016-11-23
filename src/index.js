import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import Nav from './components/Nav';
import Accueil from './components/Accueil';
import Contact from './components/Contact';
import ProduitsImage from './components/ProduitsImage';
import ProduitsPerso from './components/ProduitsPerso';
import ProduitsTerrain from './components/ProduitsTerrain';
require('styles/App.css');

const App = props => (
  <div className="index">
    <header>
      <h1>Presteege Partner</h1>
      <p>Nous donnons vie à vos envies</p>
      <hr/>
      <Nav />
      <hr/>
    </header>
      <div className="wrapper">
      <article>{ props.children }</article>
      </div>
    <footer>
      <ul>
        <li><a href="mailto:presteege@wanadoo.fr">presteege@wanadoo.fr</a></li>
        <li>Tél: (+33) 0134845434</li>
      </ul>
    </footer>
  </div>
);

let routes = (
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App} >
      <IndexRoute component={Accueil} />
      <Route path="/produits-terrain" component={ProduitsTerrain} />
      <Route path="/produits-image" component={ProduitsImage} />
      <Route path="/produits-perso" component={ProduitsPerso} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
)

// Render the main component into the dom
ReactDOM.render(routes, document.getElementById('app'));
