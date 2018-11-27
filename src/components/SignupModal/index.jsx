import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                email: '',
                password1: '',
                password2: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        
        if (user.username && user.email && user.password1 && user.password2) {
            console.log("registrando")
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div id="mySignup" className="modal styled hide fade" tabIndex="-1" role="dialog" 
                 aria-labelledby="mySignupModalLabel" aria-hidden="true">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 id="mySignupModalLabel">Create an <strong>account</strong></h4>
              </div>
              <div className="modal-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className={'control-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'control-group' + (submitted && !user.email ? ' has-error' : '')}>
                      <label htmlFor="email">Email</label>
                      <input className="form-control" type="text" name="email" placeholder="Email" value={user.email} onChange={this.handleChange} />
                      {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'control-group' + (submitted && !user.password1 ? ' has-error' : '')}>
                      <label htmlFor="password1">Password</label>
                      <input className="form-control" type="password" name="password1" placeholder="Password" value={user.password1} onChange={this.handleChange}/>
                      {submitted && !user.password1 &&
                          <div className="help-block">Password is required</div>
                      }
                  </div>
                  <div className={'control-group' + (submitted && !user.password2 ? ' has-error' : '')}>
                      <label htmlFor="password2">Last Name</label>
                      <input type="password" className="form-control" name="password2" placeholder="Password" value={user.password2} onChange={this.handleChange} />
                      {submitted && !user.password2 &&
                          <div className="help-block">Repite password is required</div>
                      }
                  </div>

                    <div className="control-group">
                      <div className="controls">
                        <button type="submit" className="btn" disabled={(registering ? 'disabled' : '')} >Sign up</button>
                      </div>
  
                    </div>
                </form>
              </div>
            </div>            
            
        );
    }
}
export default Register