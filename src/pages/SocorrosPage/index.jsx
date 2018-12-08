import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

class SocorrosPage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Primeiros Socorros">
         <div className="container ">
            <div className="row nomargin">
                <div className="span12">
                 <h4> O que fazer:</h4>
            <p className = "fazer"> Afastar a vítima de lugares perigosos, como por exemplo, áreas com piscina e com
objetos cortantes.</p>
            <div className="flexslider">
            <ul className="slides">
            <li>Retirar objetos pessoais como: óculos, colares, anéis etc..</li>
            <li>Proteger a cabeça, mas deixando-a livre para agitar-se à vontade.</li>
            <li>Manter a vítima de barriga para cima (decúbito dorsal) e a cabeça lateralizada, para
evitar engasgos.</li>
            <li>Proteger a boca, observando se a língua não está sendo mordida. Caso os dentes
estejam cerrados, não forçar a abertura da boca.</li>
            <li>Afrouxar as roupas, se necessário.</li>
            <li>Observar a respiração durante e após a crise.</li>
            <li>Encaminhar ao serviço de saúde, após a crise.</li>
            </ul>

            <h4> O que não fazer:</h4>
            <ul className ="naoFazer">
            <li>Não jogar água no rosto da vítima ou oferecer-lhe algo para cheirar durante a crise.</li>
            <li>Não introduzir os dedos, mão ou qualquer tipo de objeto no interior da boca do
indivíduo durante a convulsão.</li>
            <li>É fundamental procurar assistência médica no primeiro episódio de convulsão da
vida do indivíduo a fim de estabelecer um diagnóstico preciso e tratamento adequado.</li>
            <li>Procure serviço de emergência - SAMU 192 se:</li><br/>
            <li>• Ocorrer convulsão por motivo desconhecido;</li>
            <li>• A convulsão durar mais de cinco minutos;</li>
            <li>• A vítima não recuperar-se rapidamente ou apresentar novo episódio de convulsão;</li>
            <li>• A vítima apresentar dificuldade respiratória;</li>
            <li>• A vítima estiver grávida;</li>
            <li>• A vítima apresentar outros problemas médicos;</li>
            <li>• Houver qualquer sinal de trauma.</li>
            </ul>
            </div>
            </div>
            </div>         
         </div>
        </BasePage>
      </Fragment>
    );
  }
}

export default SocorrosPage;