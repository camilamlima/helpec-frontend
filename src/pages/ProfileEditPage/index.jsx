import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';
import HeadLine from '../../components/HeadLine';


class ProfileEditPage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Editar Meu Perfil">
         
         <HeadLine />
         
    
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="span4">
            <aside class="left-sidebar">
              <div class="widget">
                <form class="form-search">
                  <input placeholder="Type something" type="text" class="input-medium search-query"/>
                  <button type="submit" class="btn btn-square btn-theme">Search</button>
                </form>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Categories</h5>
                <ul class="cat">
                  <li><i class="icon-angle-right"></i><a href="#">Web design</a><span> (20)</span></li>
                  <li><i class="icon-angle-right"></i><a href="#">Online business</a><span> (11)</span></li>
                  <li><i class="icon-angle-right"></i><a href="#">Marketing strategy</a><span> (9)</span></li>
                  <li><i class="icon-angle-right"></i><a href="#">Technology</a><span> (12)</span></li>
                  <li><i class="icon-angle-right"></i><a href="#">About finance</a><span> (18)</span></li>
                </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Latest posts</h5>
                <ul class="recent">
                  <li>
                    <img src="img/dummies/blog/65x65/thumb1.jpg" class="pull-left" alt="" />
                    <h6><a href="#">Lorem ipsum dolor sit</a></h6>
                    <p>
                      Mazim alienum appellantur eu cu ullum officiis pro pri
                    </p>
                  </li>
                  <li>
                    <a href="#"><img src="img/dummies/blog/65x65/thumb2.jpg" class="pull-left" alt="" /></a>
                    <h6><a href="#">Maiorum ponderum eum</a></h6>
                    <p>
                      Mazim alienum appellantur eu cu ullum officiis pro pri
                    </p>
                  </li>
                  <li>
                    <a href="#"><img src="img/dummies/blog/65x65/thumb3.jpg" class="pull-left" alt="" /></a>
                    <h6><a href="#">Et mei iusto dolorum</a></h6>
                    <p>
                      Mazim alienum appellantur eu cu ullum officiis pro pri
                    </p>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div class="span8">
            <article>
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><a href="#">This is an example of standard post format</a></h3>
                    </div>
                  </div>
                    
                    <form>
                      <div class="form-group">
                        <label for="fistname">Nome</label> 
                        <input id="fistname" name="fistname" placeholder="Seu Nome" type="text" required="required" class="form-control here" />
                      </div>
                      <div class="form-group">
                        <label for="lastname">Sobrenome</label> 
                        <input id="lastname" name="lastname" placeholder="Seu Sobrenome" type="text" required="required" class="form-control here" />
                      </div>
                      <div class="form-group">
                        <label for="email">E-mail</label> 
                        <input id="email" name="email" placeholder="Seu E-mail" type="text" required="required" class="form-control here" />
                      </div>
                      <div class="form-group">
                        <label for="telephone">Telefone</label> 
                        <input id="telephone" name="telephone" placeholder="Seu telefone" type="text" required="required" class="form-control here" />
                      </div> 
                      <div class="form-group">
                        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </form>



                </div>
              </div>
            </article>
            
            
          </div>
        </div>
      </div>
    </section>
         
         
         
         
        </BasePage>
      </Fragment>
    );
  }
}

export default ProfileEditPage;