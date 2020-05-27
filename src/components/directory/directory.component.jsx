import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [
        {
          title: 'gun parts',
          imageUrl: 'https://images.unsplash.com/photo-1583368806788-309fe83a78f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'scopes',
          imageUrl: 'https://images.unsplash.com/photo-1584345513379-1d2d4529be26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          id: 2,
          linkUrl: 'shop/womens'
          
        },
        {
          title: 'ammunition',
          imageUrl: 'https://images.unsplash.com/photo-1581955957575-542d613ed134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'guns',
          imageUrl: 'https://images.unsplash.com/photo-1579185404511-7ea02696b706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          id: 4,
          size: 'large',
          linkUrl: 'shop/jackets'
        },
        {
          title: 'gun accessories',
          imageUrl: 'https://images.unsplash.com/photo-1527409954955-62b3844082b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          size: 'large',
          id: 5,
          
          linkUrl: 'shop/mens'
        }
      ]
    }
  }
  render() {
    return (
      <div class="directory-menu">
      {
      this.state.sections.map(({ title, id, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
      ))
  }
    </div>
    );
  }
}

export default Directory;