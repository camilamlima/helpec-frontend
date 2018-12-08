import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

let Users = localStorage.getItem('users');
if (!Users) {
    localStorage.setItem('users', "[]")
}
let LoggedUser = localStorage.getItem('user');
if (!LoggedUser) {
    localStorage.setItem('user', "{}")
}


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();