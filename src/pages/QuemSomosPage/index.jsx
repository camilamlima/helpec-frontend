import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

class QuemSomosPage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Noticias em Destaque">
         <div>
            <h1>Helpec - Help Epilepsia e Convulsão</h1><br/>
            <p>Missão:

Nossa missão e disseminar e esclarecer dúvidas, primeiros socorros, materiais para consulta voltados a ajudar dos portadores, familiares e amigos que sofrem com Epilepsia e Convulsão.</p>
<br/>
<p>Visão:

Como visão estamos propondo o uso da tecnologia a nosso favor com a criação e elaboração de um aplicativo mobile que a pessoa que estiver passando mal poderá enviar notificação aos contatos cadastrados ao acionar o botão de panico.</p>
<br/>
<p>Valores
Dentre nossos valores estão a respeito e diminuir o preconceito contra os portadores de epilepsia e convulsão oferecendo materiais informativos, dicas de primeiros socorros e o uso do aplicativo a fim de facilitar a vida das pessoas.</p>
         </div>
        </BasePage>
      </Fragment>
    );
  }
}

export default QuemSomosPage;