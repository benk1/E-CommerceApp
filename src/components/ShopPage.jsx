import React, { Component } from 'react';
import SHOP_DATA from '../shared/Shop.data';
import CollectionPreview from './CollectionPreview';
class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(collection => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;