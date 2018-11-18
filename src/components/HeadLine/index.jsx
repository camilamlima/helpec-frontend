import React, { Component } from 'react';

class HeadLine extends Component {
  render() {
    return (
        <section id="inner-headline">
          <div class="container">
            <div class="row">
              <div class="span4">
                <div class="inner-heading">
                  <h2>Blog left sidebar</h2>
                </div>
              </div>
              <div class="span8">
                <ul class="breadcrumb">
                  <li><a href="#"><i class="icon-home"></i></a><i class="icon-angle-right"></i></li>
                  <li><a href="#">Blog</a><i class="icon-angle-right"></i></li>
                  <li class="active">Blog with left sidebar</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default HeadLine;