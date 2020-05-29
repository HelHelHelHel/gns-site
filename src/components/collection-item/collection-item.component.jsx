import React from 'react';

import './collection-item.style.scss';

const CollectionItem = ({ id, price, name, imageUrl }) => (
  <div className="collection-item">
    <div className="image"
    style={{ backgroundImage: `url(${imageUrl})`}}/>
    <span className="name">{ name }</span>
    <span classname="price">{ price }</span>

  </div>
)

export default CollectionItem;