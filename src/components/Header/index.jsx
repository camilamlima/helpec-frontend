import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from '../../components/SigninModal';
import Register from '../../components/SignupModal';
import './header.css'

import {getSessionUser} from '../../utils';

class Header extends Component {
  
 constructor(props) {
    super(props);

    this.state = {
      is_authentication: false
    }
      
  }
  componentDidMount() {
    
    let user = getSessionUser();
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
					            <img src="http://placehold.it/30x30" className="img-circle special-img" alt="profile"/>
					              Seu Perfil<b className="caret"></b>
				            </a>
          					<ul className="dropdown-menu">
          						<li>
          						  <Link to="/profile"><i className="fa fa-cog"></i>Seu dados</Link>
        						  </li>
          						<li><Link to="/profile/sair"><i className="fa fa-sign-out"></i>Sair</Link></li>
          					</ul>
				          </li>
			          </ul>
		          </div>
            ) : (
            <div>
              <div className="headnav">
                <ul>
                  <li><a href="#mySignup" data-toggle="modal"><i className="icon-user"></i>Registre-se</a></li>
                  <li><a href="#mySignin" data-toggle="modal">Login</a></li>
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
              <img src="/assets/img/logo.png" alt="" className="logo" />
              <h1 className="logo h1">Helpec - Help Epilepsia e Convulsão </h1>
            </div>
          </div>
          <div className="span8">
            <div className="navbar navbar-static-top">
              <div className="navigation">
                <nav>
                <ul className="nav topnav">
                  <li>
                    <Link to="/"><i className="fa fa-cog"></i>Home</Link>
                  </li>
                  <li>
                    <Link to="/quemsomos"><i className="fa fa-cog"></i>Quem somos</Link>
                  </li>
                   <li>
                    <Link to="/falandosobre"><i className="fa fa-cog"></i>Falando sobre</Link>
                  </li>
                  <li>
                      <Link to="/socorros"><i className="fa fa-cog"></i>Primeiros Socorros</Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">Saiba Mais<i className="icon-angle-down"></i></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/saibamais"><i className="fa fa-cog"></i>Artigos</Link></li>
                      <li><Link to="/mitos"><i className="fa fa-cog"></i>Mitos e Verdades</Link></li>
                     </ul>
                  </li>
                  <li>
                      <Link to="/contato"><i className="fa fa-cog"></i>Contato</Link>
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