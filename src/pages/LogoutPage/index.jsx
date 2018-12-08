import React from 'react';
import { Redirect } from 'react-router-dom';

import {removeSessionUser} from '../../utils';


class Logout extends React.Component {
  
  render() {
    
    removeSessionUser()
    return (
        <Redirect to="/" />
    )
  }
}

export default Logout;