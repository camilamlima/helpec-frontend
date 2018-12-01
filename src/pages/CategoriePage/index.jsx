import React, { Component, Fragment } from 'react';

import BaseBlogPage from '../BaseBlogPage';
import HighlightPost from '../../components/HighlightPost';

class CategoriePage extends Component {
  
  render() {
    let posts = [];
    return (
      <Fragment>
        <BaseBlogPage title="Saiba Mais sobre CATEGORIA">

          {posts.map((item, i) => {
            return (
              <HighlightPost post={item} key={i}/>
            );
          })}

        </BaseBlogPage>
      </Fragment>
    );
  }
}

export default CategoriePage;