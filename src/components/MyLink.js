import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class MyLink extends React.Component {
    render () {
      // console.log('location', location);
      // console.log('this.props.to', this.props.to);
      console.log('this.props.children ', this.props.children);

      if(~location.hash.indexOf(this.props.to)) {


          return <span style={{ color: 'cornflowerblue' }}>{this.props.children}</span>


      }else{


          return <IndexLink style={{ color: 'none' }} to={this.props.to}>{this.props.children}</IndexLink>;

      }
    }
}
