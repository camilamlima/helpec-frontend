import React, { Component, Fragment } from 'react';

import BaseBlogPage from '../BaseBlogPage';
import HighlightPost from '../../components/HighlightPost';

import { posts, categories } from '../../data_source';

class CategoriePage extends Component {
  
   constructor(props) {
    super(props);

    this.state = {
      items: [],
      categorie: props.match.params.categorie_uid,
    };
    
  }
  update_categories(){
    let categorie = this.props.match.params.categorie_uid;
    const items = posts.filter(post => post.categorie == categorie);

    this.setState({
      items: items,
      categorieTitle: categories.get(categorie).categorieTitle
    });
    
  }
  
  componentWillReceiveProps() {
    this.update_categories();
  }
  componentDidMount (){
    this.update_categories();
  }
  
  render() {
    return (
      <Fragment>
        <BaseBlogPage title={`Saiba Mais sobre ${this.state.categorieTitle}`}>

          {this.state.items.map((item, i) => {
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