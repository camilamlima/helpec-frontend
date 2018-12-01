import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from '../../components/SigninModal';
import Register from '../../components/SignupModal';

class Header extends Component {
  
 constructor(props) {
    super(props);

    this.state = {
      is_authentication: false
    }
      
  }
  componentDidMount() {
    
    let user = false
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
					            <img src="http://placehold.it/30x30" className="img-circle special-img" />Seu Perfil<b className="caret"></b>
				            </a>
          					<ul className="dropdown-menu">
          						<li>
          						  <Link to="/profile"><i className="fa fa-cog"></i>Seu dados</Link>
        						  </li>
          						<li><a href="#"><i className="fa fa-sign-out"></i>Sair</a></li>
          					</ul>
				          </li>
			          </ul>
		          </div>
              

            ) : (
            <div>
              <div className="headnav">
                <ul>
                  <li><a href="#mySignup" data-toggle="modal"><i className="icon-user"></i>Login</a></li>
                  <li><a href="#mySignin" data-toggle="modal">Registre-se</a></li>
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
              <h1>Helpec - Help Epilepsia e Convulsão </h1>
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
                      <Link to="/socorros"><i className="fa fa-cog"></i>Primeiros Socorros</Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">Saiba Mais<i class="icon-angle-down"></i></a>
                      <ul class="dropdown-menu">
                        <li><Link to="/saibamais"><i className="fa fa-cog"></i>Artigos</Link></li>
                        <li><Link to="/mitos"><i className="fa fa-cog"></i>Mitos e Lendas</Link></li>
                        <li><Link to="/sobre"><i className="fa fa-cog"></i>Falando Sobre</Link></li>
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