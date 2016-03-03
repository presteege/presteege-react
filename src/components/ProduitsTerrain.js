import React from 'react';
let imgProdTerrain = require('../images/produits-terrain.jpg');

class ProduitsTerrain extends React.Component{

  render() {

    return (
      <div>
        <img src={imgProdTerrain} />
      </div>
    );
  }
}

export default ProduitsTerrain;
