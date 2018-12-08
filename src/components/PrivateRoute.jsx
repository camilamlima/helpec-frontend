import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {getSessionUser} from '../utils';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        getSessionUser()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)