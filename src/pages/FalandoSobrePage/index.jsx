import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

class FalandoSobrePage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Falando Sobre">
         <div className="container ">
            <div className="row nomargin">
                <div className="span12">
                <h4> O que é convulsão?</h4>
                <p className="sobreconvulsao"> <strong>Convulsões </strong> são contrações musculares involuntárias de parte ou de todo o corpo, decorrentes do funcionamento anormal do cérebro. Têm duração aproximada de 3 a 5 minutos.</p>
                <p className= "sobreconvulsao"> Características:</p><br/>
            <ul className="slides"><em>Fase Tônica</em></ul>
            <li> Manifesta-se pela contratura generalizada da musculatura (rigidez do corpo e dentes cerrados).</li><br/>
            <ul className="slides"><em>Fase Clônica</em></ul>
            <li>Manifesta-se por abalos musculares, salivação excessiva, perda ou não do controle dos esfíncteres da bexiga (músculo que controla a saída da urina). </li><br/>
            <ul className="slides"><em>Fase Pós-Convulsão</em></ul>
            <li>Caracterizada por sonolência e confusão mental.</li><br/>
            <p className= "sobreconvulsao"> Sinais e Sintomas:</p><br/>
            <li>Perda da consciência e queda ao solo.</li>
            <li>Contrações musculares violentas.</li>
            <li>Podem ocorrer palidez intensa e lábios azulados.</li>
Pode haver eliminação de fezes e urina.
Dentes travados e salivação abundante ('baba').

            
            </div>
            </div>         
         </div>
        </BasePage>
      </Fragment>
    );
  }
}

export default FalandoSobrePage;