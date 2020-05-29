import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './Collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title}</h1>
    <div className="collection">
      {items
      .filter((item, idx) => idx < 4 )
      .map(({id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps}/>
      ))}
    </div>
  </div>
);

export default CollectionPreview;