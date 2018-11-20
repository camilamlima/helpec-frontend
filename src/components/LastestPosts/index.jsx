import React, { Component } from 'react';

class LastestPosts extends Component {
  render() {
    return (
        <div className="widget">
            <h5 className="widgetheading">Latest posts</h5>
            <ul className="recent">
              <li>
                <img src="img/dummies/blog/65x65/thumb1.jpg" className="pull-left" alt="" />
                <h6><a href="#">Lorem ipsum dolor sit</a></h6>
                <p>
                  Mazim alienum appellantur eu cu ullum officiis pro pri
                </p>
              </li>
              <li>
                <a href="#"><img src="img/dummies/blog/65x65/thumb2.jpg" className="pull-left" alt="" /></a>
                <h6><a href="#">Maiorum ponderum eum</a></h6>
                <p>
                  Mazim alienum appellantur eu cu ullum officiis pro pri
                </p>
              </li>
              <li>
                <a href="#"><img src="img/dummies/blog/65x65/thumb3.jpg" className="pull-left" alt="" /></a>
                <h6><a href="#">Et mei iusto dolorum</a></h6>
                <p>
                  Mazim alienum appellantur eu cu ullum officiis pro pri
                </p>
              </li>
            </ul>
        </div>
    );
  }
}

export default LastestPosts;