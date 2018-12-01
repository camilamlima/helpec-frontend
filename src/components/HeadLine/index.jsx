import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeadLine extends Component {
  render() {
    return (
        <section id="inner-headline">
          <div className="container">
            <div className="row">
              <div className="span4">
                <div className="inner-heading">
                  <h2>{this.props.title}</h2>
                </div>
              </div>
              <div className="span8">
                <ul className="breadcrumb">
                  <li><Link to="/"><i className="icon-home"></i></Link><i className="icon-angle-right"></i></li>
                  <li><a href="#">Blog</a><i className="icon-angle-right"></i></li>
                  <li className="active">Blog with left sidebar</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default HeadLine;