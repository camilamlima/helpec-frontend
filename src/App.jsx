import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { PrivateRoute } from './components';

import HomePage from './pages/HomePage';
import MitosPage from './pages/MitosPage';
import AboutPage from './pages/AboutPage';
import FalandoSobrePage from './pages/FalandoSobrePage';
import SocorrosPage from './pages/SocorrosPage';
import ReadPage from './pages/ReadPage';
import CategoriePage from './pages/CategoriePage';
import BlogPost from './pages/BlogPost';
import ContatoPage from './pages/ContatoPage';

import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import OcorrenciaPage from './pages/OcorrenciaPage';
import UserContactPage from './pages/UserContactPage';
import Logout from './pages/LogoutPage';



import NotFound from './pages/NotFound';
export const history = createBrowserHistory();


class App extends React.Component {
    
    componentDidMount(){
      window.load_all_components(window.$);
    }
  
    componentDidUpdate(prevProps) {
      window.load_all_components(window.$);
    }

    render() {
        return (
          <Switch history={history}>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/falandosobre' component={FalandoSobrePage}/>
            <Route exact path='/quemsomos' component={AboutPage}/>
            <Route exact path='/mitos' component={MitosPage}/>
            <Route exact path='/socorros' component={SocorrosPage}/>
            <Route exact path='/contato' component={ContatoPage}/>
            
            {/* BLOG  */}
            <Route exact path='/saibamais' component={ReadPage}/>
            <Route exact path='/saibamais/:categorie_uid/' component={CategoriePage}/>
            <Route exact path='/saibamais/:categorie_uid/:post_uid/' component={BlogPost}/>
            
            {/* PROFILE */}
            <PrivateRoute exact path="/profile" component={ProfilePage} />
            <PrivateRoute exact path="/profile/edit" component={ProfileEditPage} />
            <PrivateRoute exact path="/profile/contatos" component={UserContactPage} />
            <PrivateRoute exact path="/profile/historico" component={OcorrenciaPage} />
            <PrivateRoute exact path="/profile/sair" component={Logout} />
            
            <Route path="*" component={NotFound}/>
          </Switch> 
        );
    }
}

export default App;