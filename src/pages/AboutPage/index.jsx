import React, { Component, Fragment } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import BasePage from '../BasePage';

import Autora from './autora.jpg';
import Logo from './logo.png';
import './aboutpage.css'

class AboutPage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Quem Somos">
            <section id="content">
                  <div className="container">
                    <div className="row">
                      <div className="span12">
                        <h2 className="introducao">Helpec - <strong>Help Epilepsia e Convulsão</strong></h2>
                        <p className="apresentacao">A Helpec surgiu com a proposta de diseminar informações, esclarecer dúvidas sobre convulsões e epilepsias, buscando assim ajudar tanto pacientes, como familiares e amigos e dessa forma podendo diminuir e até evitar todo o preconceito referente ao assunto.</p><br/>
                        <p className="apresentacao">Além disso, através do nosso site o usuário cadastrado poderá consultar material de primeiros socorros, principais características e informações de crises convulsivas e epiléticas, como também artigos e links externos relacionados ao assunto e ainda na página de perfil poderá ediatr seu perfil com maiores informações ou alteração de senha e nome, cadastrar os contatos para receber a mensagem de notificação de pânico e também registrar as ocorrências de crises mensais ou anuais expressa através de gráfico</p><br/>
                        <p className="apresentacao">Temos como meta para 2019 disponibilizar nosso protótipo como aplicativo tanto Android como IOS a fim de ajudar aos pacientes com um simples toque no botão de pânico, o responsável ou a pessoa cadastrada receberá a notificação da ocorrência e assim poder prestará ajudar e tomar as medidas necessárias para melhor socorrer.</p> 
                      </div>
                    </div>
                    <div className="container">
                    <div className="row">
                    <div className="span2">
                        <img src= {Logo} className="visao" alt="Missão"/>
                        <div className="valores">
                          <h6 className="valores">Missão</h6>
                        </div>
                      </div>
                      <div className="span10">
                        <div className="valor">
                          <p className="valor">Nossa missão e disseminar e esclarecer dúvidas, primeiros socorros, materiais para consulta voltados a ajudar dos portadores, familiares e amigos que sofrem com Epilepsia e Convulsão.</p>
                        </div>
                      </div>
                    </div>
                    </div>
                   
                    <div className="container">
                    <div className="row">
                    <div className="span2">
                        <img src= {Logo} className="visao" alt="Missão"/>
                        <div className="valores">
                          <h6 className="valores">Visão</h6>
                        </div>
                      </div>
                      <div className="span10">
                        <div className="valores">
                          <p className="valores">Nossa missão e disseminar e esclarecer dúvidas, primeiros socorros, materiais para consulta voltados a ajudar dos portadores, familiares e amigos que sofrem com Epilepsia e Convulsão.</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                  
                      <div className="span4">
                      <div className="logo_valor">
                      <img src= {Logo} alt="Valores"/>
                      <h5 className="valores">Valor</h5>
                      <p className="valores">Dentre nossos valores estão a respeito e diminuir o preconceito contra os portadores de epilepsia e convulsão oferecendo materiais informativos, dicas de primeiros socorros e o uso do aplicativo a fim de facilitar a vida das pessoas.</p>
                      </div>
                    </div>

                    <div className="container">
                    <div className="row">
                      <div className="span12">
                        <div className="solidline">
                        </div>
                      </div>
                    </div>
                    </div>
                    
                    <div className="container">
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
                            Estudante em formação para desenvolvimento FullStack, buscando aprender e desenvolver oferecendo através da tecnologia oferecer maior facilidade. 
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
                </div>
                
                </section>
        </BasePage>
      </Fragment>
    );
  }
}

export default AboutPage;