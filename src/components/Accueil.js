import React from 'react';
let imgAccueil = require('../images/image-accueil.jpg');

class Accueil extends React.Component{

  render() {

    return (
      <div className="index">
        <img src={imgAccueil} />
      </div>
    );
  }
}

export default Accueil;
