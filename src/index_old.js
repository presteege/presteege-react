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

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { usernameForm: '' , usernameToken: '', count: 0 };
  }

   handleSubmit (event) {

     event.preventDefault();
     this.setState({ usernameForm: this.refs.username.value, count: this.state.count + 1 });

     const fromServerBDD = 'chisNaN';

     if(this.refs.username.value === fromServerBDD) {

       const getToken = {
         url: 'https://wt-artgreg-outlook-fr-0.run.webtask.io/getToken?webtask_no_cache=1',
         headers: { method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: fromServerBDD })
      }
    };
    fetch(getToken.url, getToken.headers).then(r => r.text())
    .then(token => localStorage.setItem('token', token)).catch(e => console.warn(e));

     }else{
       alert('wrong username');
     }
  }

componentDidUpdate() {
  if(this.state.usernameForm) {//first time usernameForm empty

    const localToken = localStorage.getItem('token');
    const checkToken = {
    url: 'https://wt-artgreg-outlook-fr-0.run.webtask.io/checkToken?webtask_no_cache=1',
    headers: {
        method: 'GET',
        headers: {
            //'Authorization': JSON.parse('{"localToken": "poeut"}')
            'Authorization': JSON.parse(localToken)
        }
    }
    };

    fetch(checkToken.url, checkToken.headers).then(r => r.json())
    .then(r2 => {

      //rerender
      if(!this.state.usernameToken){

        if(r2.username) {
              this.setState({ usernameToken: r2.username, count: this.state.count + 1 });

        }else{
          this.setState({ usernameToken: 'ANYTHING ELSE than empty' });

        }
      }
      //rerender
    }).catch(e => console.warn(e));

  }else {

    console.log('no need to fetch because usernameForm empty');
  }

}

componentDidMount() {
  console.log('this.props.children ',this.props.children);
}

  render() {
    console.log('this.state ', this.state);
    if(!this.state.usernameForm) {
      return (
        <div>
          <form>
            <input type="text"  defaultValue="chisNaN"  placeholder="username" ref="username"/>
            <button type="submit" onClick={event => this.handleSubmit(event)}>login</button>
          </form>
        </div>
      );
    }else {
      if(this.state.usernameForm === this.state.usernameToken || this.state.usernameToken == '') {
        return (

            <div className="index">
              <header>
                <h1>Presteege Partner</h1>
                <p>Nous donnons vie à vos envies</p>
                <hr/>
                <Nav count={this.state.count} />
                <hr/>
              </header>
                <div className="wrapper">
                <article>{ this.props.children || <Accueil /> }</article>
                </div>
              <footer>
                <ul>
                  <li><a href="mailto:presteege@wanadoo.fr">presteege@wanadoo.fr</a></li>
                  <li>Tél: (+33) 0134845434</li>
                </ul>
              </footer>
            </div>
        );

      }else {
        return <div>invalid empty usernameToken {this.state.usernameToken}</div>
      }
    }
  }

}

let routes = (
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App} >
      <IndexRoute component={Accueil} />
      {/* <Route path="/" component={Accueil} /> */}
      <Route path="/produits-terrain" component={ProduitsTerrain} />
      <Route path="/produits-image" component={ProduitsImage} />
      <Route path="/produits-perso" component={ProduitsPerso} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
)

// Render the main component into the dom
ReactDOM.render(routes, document.getElementById('app'));
