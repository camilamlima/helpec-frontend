import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LastestPosts extends Component {
  render() {
    let posts = []
    return (
        <div className="widget">
            <h5 className="widgetheading">Ultimos Artigos</h5>
            <ul className="recent">
              {posts.map((item, i) => {
                return (
                  <li key={i}>
                    <img src={item.img} className="pull-left" alt="" />
                    <h6><Link to={`/saibamais/${item.categorie}/${item.uid}/`}>{item.title}</Link></h6>
                    <p>{item.text}</p>
                  </li>
                );
              })}
            </ul>
        </div>
    );
  }
}

export default LastestPosts;