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
                      <h3><a href="#">This is an example of standard post format</a></h3>
                    </div>
                  </div>
                  <p>
                    Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei. Fierent adipisci iracundia est ei, usu timeam persius
                    ea. Usu ea justo malis, pri quando everti electram ei, ex homero omittam salutatus sed.
                  </p>
                  <div className="bottom-article">
                    <ul className="meta-post">
                      <li><i className="icon-calendar"></i><a href="#"> Mar 23, 2013</a></li>
                      <li><i className="icon-user"></i><a href="#"> Admin</a></li>
                      <li><i className="icon-folder-open"></i><a href="#"> Blog</a></li>
                      <li><i className="icon-comments"></i><a href="#">4 Comments</a></li>
                    </ul>
                    <a href="#" className="pull-right">Continue reading <i className="icon-angle-right"></i></a>
                  </div>
                </div>
              </div>
            </article>

        </BaseProfilePage>
      </Fragment>
    );
  }
}

export default ProfilePage;