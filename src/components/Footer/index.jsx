import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="span3">
            <div className="widget">
              <h5 className="widgetheading">Browse pages</h5>
              <ul className="link-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quemsomos">Quem somos</Link></li>
                <li><Link to="/mitos">Mitos e Verdades</Link></li>
                <li><Link to="/sobre">Falando Sobre</Link></li>
                <li><Link to="/socorros">Primeiro Socorros</Link></li>
                <li><Link to="/saibamais">Saiba Mais</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>
          </div>
          <div className="span3">
            <div className="widget">
              <h5 className="widgetheading">Fale conosco</h5>
              <p>
                <i className="icon-phone"></i> (11) 98232-6391 <br/>
                <i className="icon-envelope-alt"></i> camilam.oliveiralima@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="span6">
              <div className="copyright">
                <p>
                  <span>&Camila Lima - Todos os direitos reservados.</span>
                </p>
               </div>
            </div>
            <div className="span6">
              <ul className="social-network">
                <li><a href="https://www.facebook.com/" data-placement="bottom" title="Facebook"><i className="icon-facebook icon-square"></i></a></li>
                <li><a href="https://twitter.com/" data-placement="bottom" title="Twitter"><i className="icon-twitter icon-square"></i></a></li>
                <li><a href="https://www.linkedin.com/in/camilamlima/" data-placement="bottom" title="Linkedin"><i className="icon-linkedin icon-square"></i></a></li>
                <li><a href="https://br.pinterest.com/" data-placement="bottom" title="Pinterest"><i className="icon-pinterest icon-square"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;