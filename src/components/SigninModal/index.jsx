import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div id="mySignin" className="modal styled hide fade" tabIndex="-1" role="dialog" 
                 aria-labelledby="mySigninModalLabel" aria-hidden="true">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 id="mySigninModalLabel">Login to your <strong>account</strong></h4>
              </div>
              <div className="modal-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className={'control-group' + (submitted && !username ? ' has-error' : '')}>
                    <label className="control-label" htmlFor="username">Username</label>
                    <div className="controls">
                      <input type="text" name='username' placeholder="E-mail" value={username} onChange={this.handleChange}/>
                      {submitted && !username &&
                        <div className="help-block">Username is required</div>
                      }
                    </div>
                  </div>
                  <div className={'control-group' + (submitted && !password ? ' has-error' : '')}>
                    <label className="control-label" htmlFor="password">Password</label>
                    <div className="controls">
                      <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                      {submitted && !password &&
                        <div className="help-block">Password is required</div>
                      }
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="controls">
                      <button type="submit" className="btn" disabled={(loggingIn ? 'disabled' : '')} >Sign in</button>
                    </div>
                    <p className="aligncenter margintop20">
                      Forgot password? <a href="#myReset" data-dismiss="modal" aria-hidden="true" data-toggle="modal">Reset</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            /* Reset Modal */
                      
            
            
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login }; 