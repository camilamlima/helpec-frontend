import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './components';

import HomePage from './pages/HomePage';
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
