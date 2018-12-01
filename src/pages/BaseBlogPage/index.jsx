import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../BasePage';
import LastestPosts from '../../components/LastestPosts';


class BaseBlogPage extends Component {
  
  render() {
    let categories = [
      {
        categorie:'test',
        categorieTitle:'TESTE',
        categorieCount: 10
      }
    ];
    return (
      <Fragment>
        <BasePage title={this.props.title}>
         
          <section id="content">
            <div className="container">
              <div className="row">
                <div className="span4">
                  <aside className="left-sidebar">
                    
                    <div className="widget">
                      <h5 className="widgetheading">Caregorias</h5>
                      <ul className="cat">
                        {categories.map((item, i) => {
                          return (
                          <li key={i}>
                            <i class="icon-angle-right"></i>
                              <Link to={`/saibamais/${item.categorie}/`}>{item.categorieTitle}</Link>
                                <span> ({item.categorieCount})</span>
                          </li>
                          );
                        })}                     
                      </ul>
                    </div>
                    
                    <LastestPosts />
                  </aside>
                </div>
                <div className="span8">
                  { this.props.children }
                </div>
              </div>
            </div>
          </section>
        </BasePage>
      </Fragment>
    );
  }
}

export default BaseBlogPage;