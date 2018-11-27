import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { PrivateRoute } from './components';

import HomePage from './pages/HomePage';
import QuemSomosPage from './pages/QuemSomosPage';
import MitosPage from './pages/MitosPage';
import AboutPage from './pages/AboutPage';
import SocorrosPage from './pages/SocorrosPage';
import ReadPage from './pages/ReadPage';
import ContatoPage from './pages/ContatoPage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';


export const history = createBrowserHistory();


class App extends React.Component {

    render() {
        return (
          <Router history={history}>
            <div>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/quemsomos' component={QuemSomosPage}/>
                <Route exact path='/mitos' component={MitosPage}/>
                <Route exact path='/sobre' component={AboutPage}/>
                <Route exact path='/socorros' component={SocorrosPage}/>
                <Route exact path='/saibamais' component={ReadPage}/>
                <Route exact path='/contato' component={ContatoPage}/>
                <PrivateRoute exact path="/profile/edit" component={ProfileEditPage} />
                <PrivateRoute exact path="/profile" component={ProfilePage} />
            </div>
          </Router> 
        );
    }
}

export default App;