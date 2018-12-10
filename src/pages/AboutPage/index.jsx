import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';
import Autora from './autora.jpg';


class AboutPage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Quem Somos">
            <section id="content">
                  <div className="container">
                    <div className="row">
                      <div className="span6">
                        <h2>Helpec - <strong>Help Epilepsia e Convulsão</strong></h2>
                        <p>Crises Convulsivas x Epilepsia: As convulsões não costumam demorar, entretanto fique
                        alerta, conte quanto tempo durou a crise e tome cuidado
                        com objetos cortantes ao redor da pessoa durante a
                        convulsão.
                        </p>
                        <p>As crises convulsivas podem surgir a partir do período
                        neonatal, estas são consequências do sistema nervoso
                        central, sendo comprometido ainda no útero, durante ou
                        após o nascimento. ( Fonte:ed.casa do psicóogo. livro
                        convulsões na infância e adolescência, pg
                        16,TOPCZEWSKI,ABRAM)</p>
                      </div>
                      <div className="span6">
                        <div className="flexslider">
                          <ul className="slides">
                            <li>
                              <img src="img/works/full/image-01-full.jpg" alt="" />
                            </li>
                            <li>
                              <img src="img/works/full/image-02-full.jpg" alt="" />
                            </li>
                            <li>
                              <img src="img/works/full/image-03-full.jpg" alt="" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="span12">
                        <h4>Colaboradora</h4>
                      </div>
                      <div className="span3">
                        <img src= {Autora} alt="Foto Camila Perfil"/>
                        <div className="roles">
                          <p className="lead">
                            <strong>Camila Lima</strong>
                          </p>
                        </div>
                      </div>
                      <div className="span9">
                        <div className="roles">
                          <p>
                            Teste
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                   
                    
                  </div>
                </section>
        </BasePage>
      </Fragment>
    );
  }
}

export default AboutPage;