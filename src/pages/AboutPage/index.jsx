import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

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
                        <h4>Talented peoples behind Flattern</h4>
                      </div>
                      <div className="span3">
                        <img src="img/dummies/team1.jpg" alt="" className="img-polaroid" />
                        <div className="roles">
                          <p className="lead">
                            <strong>Vincent Austin Jr</strong>
                          </p>
                          <p>
                            CEO - Founder
                          </p>
                        </div>
                      </div>
                      <div className="span3">
                        <img src="img/dummies/team2.jpg" alt="" className="img-polaroid" />
                        <div className="roles">
                          <p className="lead">
                            <strong>Tommy Laugher</strong>
                          </p>
                          <p>
                            Lead designer
                          </p>
                        </div>
                      </div>
                      <div className="span3">
                        <img src="img/dummies/team3.jpg" alt="" className="img-polaroid" />
                        <div className="roles">
                          <p className="lead">
                            <strong>Gabirelle Borowski</strong>
                          </p>
                          <p>
                            Customer support
                          </p>
                        </div>
                      </div>
                      <div className="span3">
                        <img src="img/dummies/team4.jpg" alt="" className="img-polaroid" />
                        <div className="roles">
                          <p className="lead">
                            <strong>Benny Strongton</strong>
                          </p>
                          <p>
                            Coffee maker
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
                    
                    <div className="row">
                      <div className="span6">
                        <h4>Nossos Principios</h4>
                        <div className="accordion" id="accordion2">
                          <div className="accordion-group">
                            <div className="accordion-heading">
                              <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">Missão:</a>
                            </div>
                            <div id="collapseOne" className="accordion-body collapse in">
                              <div className="accordion-inner">
                                <p>Nossa missão e disseminar e esclarecer dúvidas, primeiros socorros, materiais para consulta voltados a ajudar dos portadores, familiares e amigos que sofrem com Epilepsia e Convulsão.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-group">
                            <div className="accordion-heading">
                              <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">Visão:</a>
                            </div>
                            <div id="collapseTwo" className="accordion-body collapse">
                              <div className="accordion-inner">
                                <p>Como visão estamos propondo o uso da tecnologia a nosso favor com a criação e elaboração de um aplicativo mobile que a pessoa que estiver passando mal poderá enviar notificação aos contatos cadastrados ao acionar o botão de panico.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-group">
                            <div className="accordion-heading">
                              <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">Valores</a>
                            </div>
                            <div id="collapseThree" className="accordion-body collapse">
                              <div className="accordion-inner">
                                <p>Dentre nossos valores estão a respeito e diminuir o preconceito contra os portadores de epilepsia e convulsão oferecendo materiais informativos, dicas de primeiros socorros e o uso do aplicativo a fim de facilitar a vida das pessoas.</p>
                              </div>
                            </div>
                          </div>
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