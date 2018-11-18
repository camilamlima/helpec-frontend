import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../../_helpers';

import { Login } from '../../components/SigninModal';
import { Register } from '../../components/SignupModal';

class Header extends Component {
  
 constructor(props) {
    super(props);

    this.state = {
      is_authentication: false
    }
      
  }
  componentDidMount() {
    
    let user = getUser();
    if (user){
       this.setState({
            is_authentication: true
         
       })
    }
    
  }  
  
  render() {
    return (
    <header>
      <div className="container ">
        <div className="row nomargin">
          <div className="span12">
            { this.state.is_authentication ? (
              
              <div className="headnav">
						    <ul className="navbar-right">
				  				<li className="dropdown">
					          <a href="#" className="dropdown-toggle profile-image" data-toggle="dropdown">
					            <img src="http://placehold.it/30x30" className="img-circle special-img" /> Test <b className="caret"></b>
				            </a>
          					<ul className="dropdown-menu">
          						<li>
          						  <Link to="/profile"><i className="fa fa-cog"></i> Profile</Link>
        						  </li>
          						<li><a href="#"><i className="fa fa-sign-out"></i> Sign-out</a></li>
          					</ul>
				          </li>
			          </ul>
		          </div>
              

            ) : (
            <div>
              <div className="headnav">
                <ul>
                  <li><a href="#mySignup" data-toggle="modal"><i className="icon-user"></i> Sign up</a></li>
                  <li><a href="#mySignin" data-toggle="modal">Sign in</a></li>
                </ul>
              </div>
              
              {/* Signup Modal */}
              <Login />
            
              {/* Signin Modal */}
              <Register />
            </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="span4">
            <div className="logo">
              <a href="index.html"><img src="img/logo.png" alt="" className="logo" /></a>
              <h1>Flat and trendy bootstrap template</h1>
            </div>
          </div>
          <div className="span8">
            <div className="navbar navbar-static-top">
              <div className="navigation">
                <nav>
                  <ul className="nav topnav">
                    <li className="dropdown active">
                      <a href="index.html">Home <i className="icon-angle-down"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="index-alt2.html">Homepage 2</a></li>
                        <li><a href="index-alt3.html">Homepage 3</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Features <i className="icon-angle-down"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="typography.html">Typography</a></li>
                        <li><a href="table.html">Table</a></li>
                        <li><a href="components.html">Components</a></li>
                        <li><a href="animations.html">56 Animations</a></li>
                        <li><a href="icons.html">Icons</a></li>
                        <li><a href="icon-variations.html">Icon variations</a></li>
                        <li className="dropdown"><a href="#">3 Sliders <i className="icon-angle-right"></i></a>
                          <ul className="dropdown-menu sub-menu-level1">
                            <li><a href="index.html">Nivo slider</a></li>
                            <li><a href="index-alt2.html">Slit slider</a></li>
                            <li><a href="index-alt3.html">Parallax slider</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages <i className="icon-angle-down"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="about.html">About us</a></li>
                        <li><a href="pricingbox.html">Pricing boxes</a></li>
                        <li><a href="testimonials.html">Testimonials</a></li>
                        <li><a href="404.html">404</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Portfolio <i className="icon-angle-down"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="portfolio-2cols.html">Portfolio 2 columns</a></li>
                        <li><a href="portfolio-3cols.html">Portfolio 3 columns</a></li>
                        <li><a href="portfolio-4cols.html">Portfolio 4 columns</a></li>
                        <li><a href="portfolio-detail.html">Portfolio detail</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Blog <i className="icon-angle-down"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                        <li><a href="post-left-sidebar.html">Post left sidebar</a></li>
                        <li><a href="post-right-sidebar.html">Post right sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* end navigation */}
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;