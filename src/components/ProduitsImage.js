import React from 'react';
let imgProdImage = require('../images/produits-dimage.jpg');

class ProduitsImage extends React.Component{

  render() {

    return (
      <div>
        <img src={imgProdImage} />
      </div>
    );
  }
}

export default ProduitsImage;
