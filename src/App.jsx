import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './components';

import HomePage from './pages/HomePage';
import MitosPage from './pages/MitosPage';
import AboutPage from './pages/AboutPage';
import SocorrosPage from './pages/SocorrosPage';
import ReadPage from './pages/ReadPage';
import ContatoPage from './pages/ContatoPage';
import ProfilePage from './pages/ProfilePage';
import { ProfileEditPage } from './pages/ProfileEditPage';


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        return (
          <Router history={history}>
            <div>
                <Route exact path='/' component={HomePage}/>
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

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
