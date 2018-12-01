import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { PrivateRoute } from './components';

import HomePage from './pages/HomePage';
import MitosPage from './pages/MitosPage';
import AboutPage from './pages/AboutPage';
import SocorrosPage from './pages/SocorrosPage';
import ReadPage from './pages/ReadPage';
import CategoriePage from './pages/CategoriePage';
import BlogPost from './pages/BlogPost';
import ContatoPage from './pages/ContatoPage';

import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import NotFound from './pages/NotFound';

export const history = createBrowserHistory();


class App extends React.Component {

    render() {
        return (
          <Router history={history}>
            <div>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/quemsomos' component={AboutPage}/>
                <Route exact path='/mitos' component={MitosPage}/>
                <Route exact path='/socorros' component={SocorrosPage}/>
                <Route exact path='/saibamais' component={ReadPage}/>
                <Route exact path='/saibamais/:categorie_uid/' component={CategoriePage}/>
                <Route exact path='/saibamais/:categorie_uid/:post_uid/' component={BlogPost}/>
                <Route exact path='/contato' component={ContatoPage}/>

                <PrivateRoute exact path="/profile/edit" component={ProfileEditPage} />
                <PrivateRoute exact path="/profile" component={ProfilePage} />

                <Route path="*" component={NotFound}/>
            </div>
          </Router> 
        );
    }
}

export default App;