import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';
import Infografico from './infografico.jpeg';

class FalandoSobrePage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Falando Sobre">
         <div className="container ">
            <div className="row nomargin">
                <div className="span12">
                <h4 className="sobrediferenca">  Convulsão e Epilepsia é a mesma coisa? </h4>
                <p className="definicao"> Não, pois uma pessoa pode ter uma ou duas convulsões pontuais durante sua vida toda; neste caso, dizemos que o paciente teve crises, convulsão, mas não tem epilepsia.</p><br/>
                <p className="definicao">A convulsão acontece por causa de uma falha na condução elétrica no cérebro, levando à maior atividade elétrica em algum ponto suscetível deste, o que provoca os sintomas da crise convulsiva (abalos musculares, perda da consciência, salivação, e em alguns casos diurese e evacuação espontânea durante as crises).</p>
                <p className="definicao">A epilepsia se caracteriza por crises epilépticas de repetição. É uma doença frequente que acomete cerca de 1 a 2% da população geral. Além disto, cerca de 4% das pessoas,  já apresentou pelo menos uma crise convulsiva na vida.  Na crise epiléptica, por algum motivo, um agrupamento de células cerebrais se comporta de maneira anormal, como se fosse um curto-circuito.
                diagnóstico de epilepsia é dado geralmente quando um mesmo indivíduo apresenta duas ou mais convulsões. Nestes casos, caracterizando corretamente a repetição das crises, o seu tipo, e possível causa destas crises convulsivas, denomina-se que o indivíduo tem o diagnóstico de Epilepsia.</p><br/>
                
                
                Crises Convulsivas x Epilepsia
As convulsões não costumam demorar, entretanto fique alerta, conte quanto tempo durou a crise e tome cuidado com objetos cortantes ao redor da pessoa durante a
convulsão.

As crises convulsivas podem surgir a partir do período neonatal, estas são consequências do sistema nervoso central, sendo comprometido ainda no útero, durante ou
após o nascimento. 

Quando falamos em crise convulsiva, convulsão ou ataque epilético, logo
vem à nossa cabeça aquela assustadora imagem de um paciente se
debatendo todo, babando, com os olhos revirados e com movimentos
anárquicos dos membros., este quadro representa uma crise convulsiva
generalizada, chamada de crise convulsiva tônico-clônica. É apenas um dos
vários tipos de crise convulsiva existentes.
a) Crise convulsiva parcial
A crise epilética parcial é aquela que ocorre quando os impulsos elétricos
anômalos ficam restritos a apenas uma região do cérebro.
b) Crise convulsiva generalizada
Na crise convulsiva generalizada, os dois hemisférios do cérebro são
afetados.
Uma das manifestações possíveis da crise epilética generalizada é a crise de
ausência. Neste caso, o paciente perde contato com o mundo externo e fica
parado com o olhar fixo.
É possível haver alguns automatismos como picar de olhos repetidamente,
como ocorre na crise parcial complexa. A diferença é que a crise de
ausência é mais curta, dura cerca de 20 segundos, pode ocorrer dezenas de
vezes ao longo do dia e o paciente não apresenta aura, nem está confuso ao
final da crise. Às vezes, o paciente retoma a atividade que estava fazendo
como se nada tivesse acontecido.
A crises tônico-clônicas duram entre 1 a 3 minutos. Ao final, o paciente
apresenta cansaço extremo, sonolência, confusão e amnésia, não lembrando
do que ocorreu.
Fonte: blog Faland
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
        <img src= {Infografico} alt="Infografico de Epilepsia" align="center"/>
        </BasePage>
      </Fragment>
    );
  }
}

export default FalandoSobrePage;