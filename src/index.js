import React, { createClass } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, Link, withRouter, hashHistory } from 'react-router'

/*
ex taken from official react router
https://github.com/ReactTraining/react-router/blob/master/examples/auth-flow-async-with-query-params/app.js
*/

function App(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

const Form = withRouter(
  createClass({

    getInitialState() {
      return {
        value: ''
      }
    },

    submitAction(event) {
      event.preventDefault()
      this.props.router.push({
        pathname: '/page',
        query: {
          qsparam: this.state.value
        }
      })
    },

    handleChange(event) {
      this.setState({ value: event.target.value })
    },

    render() {
      return (
        <form onSubmit={this.submitAction}>
          <p>password is <em>chisNaN</em></p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Submit the thing</button>
          <p><Link to="/page?qsparam=chisNaN">Or authenticate via URL</Link></p>
          <p><Link to="/page?qsparam=bacon">Or try failing to authenticate via URL</Link></p>
        </form>
      )
    }
  })
)

function Page() {
  return <h1>Hey, I see you are authenticated. Welcome!</h1>
}

function ErrorPage() {
  return <h1>Oh no! Your auth failed!</h1>
}

function requireCredentials(nextState, replace, next) {
  const query = nextState.location.query
  if (query.qsparam) {

    const getToken = {
      url: 'https://wt-artgreg-outlook-fr-0.run.webtask.io/getToken?webtask_no_cache=1',
      headers: { method: 'POST',
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({ username: query.qsparam })
   }
 };
 fetch(getToken.url, getToken.headers).then(r => r.json())
 .then(token => {

   if(token !== 'error') {
     console.log(token);
     localStorage.setItem('token', token);
     next();
   }else{
     console.log('error');
     replace('/error');
     next();
   }

 } ).catch(e => console.warn(e));
  } else {
    replace('/error')
    next()
  }
}

render((
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Form} />
      <Route path="page" component={Page} onEnter={requireCredentials}/>
      <Route path="error" component={ErrorPage}/>
    </Route>
  </Router>
), document.getElementById('app'))
