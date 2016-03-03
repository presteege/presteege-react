import React from 'react';
let imgProdPerso = require('../images/produits-personalisables.jpg');

class ProduitsPerso extends React.Component{

  render() {

    return (
      <div>
        <img src={imgProdPerso} />
      </div>
    );
  }
}

export default ProduitsPerso;
