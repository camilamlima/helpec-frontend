import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

class HomePage extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Seu site de ajuda">
        
          <section id="featured">
            
            
            <div id="nivo-slider">
              <div className="nivo-slider">
                
                <img src="img/slides/nivo/bg-1.jpg" alt="" title="#caption-1" />
                
                <img src="img/slides/nivo/bg-2.jpg" alt="" title="#caption-2" />
                
                <img src="img/slides/nivo/bg-3.jpg" alt="" title="#caption-3" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="span12">
                    
                    <div className="nivo-caption" id="caption-1">
                      <div>
                        <h2>Awesome <strong>features</strong></h2>
                        <p>
                          Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                        </p>
                        <a href="#" className="btn btn-theme">Read More</a>
                      </div>
                    </div>
                    
                    <div className="nivo-caption" id="caption-2">
                      <div>
                        <h2>Fully <strong>responsive</strong></h2>
                        <p>
                          Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                        </p>
                        <a href="#" className="btn btn-theme">Read More</a>
                      </div>
                    </div>
                    
                    <div className="nivo-caption" id="caption-3">
                      <div>
                        <h2>Very <strong>customizable</strong></h2>
                        <p>
                          Lorem ipsum dolor sit amet nsectetuer nec Vivamus. Curabitu laoreet amet eget. Viurab oremd ellentesque ameteget. Lorem ipsum dolor sit amet nsectetuer nec vivamus.
                        </p>
                        <a href="#" className="btn btn-theme">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </section>
          <section className="callaction">
            <div className="container">
              <div className="row">
                <div className="span12">
                  <div className="big-cta">
                    <div className="cta-text">
                      <h3>We've created more than <span className="highlight"><strong>5000 websites</strong></span> this year!</h3>
                    </div>
                    <div className="cta floatright">
                      <a className="btn btn-large btn-theme btn-rounded" href="#">Request a quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="content">
            <div className="container">
              <div className="row">
                <div className="span12">
                  <div className="row">
                    <div className="span3">
                      <div className="box aligncenter">
                        <div className="aligncenter icon">
                          <i className="icon-briefcase icon-circled icon-64 active"></i>
                        </div>
                        <div className="text">
                          <h6>Corporate business</h6>
                          <p>
                            Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                          </p>
                          <a href="#">Learn more</a>
                        </div>
                      </div>
                    </div>
                    <div className="span3">
                      <div className="box aligncenter">
                        <div className="aligncenter icon">
                          <i className="icon-desktop icon-circled icon-64 active"></i>
                        </div>
                        <div className="text">
                          <h6>Responsive theme</h6>
                          <p>
                            Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                          </p>
                          <a href="#">Learn more</a>
                        </div>
                      </div>
                    </div>
                    <div className="span3">
                      <div className="box aligncenter">
                        <div className="aligncenter icon">
                          <i className="icon-beaker icon-circled icon-64 active"></i>
                        </div>
                        <div className="text">
                          <h6>Coded carefully</h6>
                          <p>
                            Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                          </p>
                          <a href="#">Learn more</a>
                        </div>
                      </div>
                    </div>
                    <div className="span3">
                      <div className="box aligncenter">
                        <div className="aligncenter icon">
                          <i className="icon-coffee icon-circled icon-64 active"></i>
                        </div>
                        <div className="text">
                          <h6>Sit and enjoy</h6>
                          <p>
                            Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                          </p>
                          <a href="#">Learn more</a>
                        </div>
                      </div>
                    </div>
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
                  <h4 className="heading">Some of recent <strong>works</strong></h4>
                  <div className="row">
                    <section id="projects">
                      <ul id="thumbs" className="portfolio">
                        
                        <li className="item-thumbs span3 design" data-id="id-0" data-type="web">
                          
                          <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The City" href="img/works/full/image-01-full.jpg">
      						<span className="overlay-img"></span>
      						<span className="overlay-img-thumb font-icon-plus"></span>
      						</a>
                          
                          <img src="img/works/thumbs/image-01.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                        </li>
                        
                        
                        <li className="item-thumbs span3 design" data-id="id-1" data-type="icon">
                          
                          <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Office" href="img/works/full/image-02-full.jpg">
      						<span className="overlay-img"></span>
      						<span className="overlay-img-thumb font-icon-plus"></span>
      						</a>
                          
                          <img src="img/works/thumbs/image-02.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                        </li>
                        
                        
                        <li className="item-thumbs span3 photography" data-id="id-2" data-type="illustrator">
                          
                          <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains" href="img/works/full/image-03-full.jpg">
      						<span className="overlay-img"></span>
      						<span className="overlay-img-thumb font-icon-plus"></span>
      						</a>
                          
                          <img src="img/works/thumbs/image-03.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                        </li>
                        
                        
                        <li className="item-thumbs span3 photography" data-id="id-2" data-type="illustrator">
                          
                          <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains" href="img/works/full/image-04-full.jpg">
      						<span className="overlay-img"></span>
      						<span className="overlay-img-thumb font-icon-plus"></span>
      						</a>
                          
                          <img src="img/works/thumbs/image-04.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                        </li>
                        
                        
                        <li className="item-thumbs span3 photography" data-id="id-4" data-type="web">
                          
                          <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Sea" href="img/works/full/image-05-full.jpg">
      						<span className="overlay-img"></span>
      						<span className="overlay-img-thumb font-icon-plus"></span>
      						</a>
                          
                          <img src="img/works/thumbs/image-05.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                        </li>
                        
                        
                        <li className="item-thumbs span3 photography" data-id="id-5" data-type="icon">
                          
                          <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="Clouds" href="img/works/full/image-06-full.jpg">
      						<span className="overlay-img"></span>
      						<span className="overlay-img-thumb font-icon-plus"></span>
      						</a>
                          
                          <img src="img/works/thumbs/image-06.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                        </li>
                        
                        
                        <li className="item-thumbs span3 photography" data-id="id-2" data-type="illustrator">
                          
                          <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Mountains" href="img/works/full/image-07-full.jpg">
      						<span className="overlay-img"></span>
      						<span className="overlay-img-thumb font-icon-plus"></span>
      						</a>
                          
                          <img src="img/works/thumbs/image-07.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                        </li>
                        
                        
                        <li className="item-thumbs span3 design" data-id="id-0" data-type="web">
                          
                          <a className="hover-wrap fancybox" data-fancybox-group="gallery" title="The Dark" href="img/works/full/image-08-full.jpg">
      						<span className="overlay-img"></span>
      						<span className="overlay-img-thumb font-icon-plus"></span>
      						</a>
                          
                          <img src="img/works/thumbs/image-08.jpg" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio. Curabitur pellentesque, dolor vel pharetra mollis."/>
                        </li>
                        
                      </ul>
                    </section>
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
                  <h4>Very satisfied <strong>clients</strong></h4>
                  <ul id="mycarousel" className="jcarousel-skin-tango recent-jcarousel clients">
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client1.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client2.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client3.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client4.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client5.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client6.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client1.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client2.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client3.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client4.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client5.png" className="client-logo" alt="" />
      					</a>
                    </li>
                    <li>
                      <a href="#">
      					<img src="img/dummies/clients/client6.png" className="client-logo" alt="" />
      					</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="bottom">
            <div className="container">
              <div className="row">
                <div className="span12">
                  <div className="aligncenter">
                    <div id="twitter-wrapper">
                      <div id="twitter">
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

export default HomePage;