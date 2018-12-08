import React, { Component, Fragment } from 'react';

import BaseProfilePage from '../BaseProfilePage';


class ProfilePage extends Component {
  
  render() {
    return (
      <Fragment>
        <BaseProfilePage title="Meu Perfil">

            <article>
              <div className="row">
                <div className="span8">
                  <div className="post-image">
                    <div className="post-heading">
                      <h3>Bem vindo ao Helpc - seu site de ajuda</h3>
                    </div>
                  </div>
                  <p>
                    Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei. Fierent adipisci iracundia est ei, usu timeam persius
                    ea. Usu ea justo malis, pri quando everti electram ei, ex homero omittam salutatus sed.
                  </p>
                  
                </div>
              </div>
            </article>

        </BaseProfilePage>
      </Fragment>
    );
  }
}

export default ProfilePage;