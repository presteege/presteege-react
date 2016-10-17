import React from 'react';
import { IndexLink } from 'react-router';

export default class MyLink extends React.Component {
    render () {

      if(~location.hash.indexOf(this.props.to)) {

          return <span style={{ color: 'cornflowerblue' }}>{this.props.children}</span>
      }else{
          return <IndexLink style={{ color: 'none' }} to={this.props.to}>{this.props.children}</IndexLink>;

      }
    }
}
